/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import 'reflect-metadata'

import { Logger } from '@turnly/common'
import * as stopWatch from 'marky'
import PQueue from 'p-queue'
import pRetry from 'p-retry'

import { Event } from '../contracts/events/base.event'
import { formatToSimpleName } from '../helpers/simple-name.util'
import { Type } from '../types/command.type'
import { EVENT_METADATA, EVENTS_SUBSCRIBER_METADATA } from './constants'

const queue = new PQueue({ concurrency: 1 })

const executeSubscriber = async (name = 'Subscriber', subscriber: Function) =>
  queue.add(async () =>
    pRetry(
      async () => {
        stopWatch.mark(name)

        Logger.verbose('Consuming event from events bus...')

        await subscriber()

        Logger.verbose('Consumed event successfully.', {
          ...stopWatch.stop(name),
        })
      },
      {
        retries: 3,
        onFailedAttempt: error => {
          Logger.warn(
            `Consume event failed. Retrying ${error.retriesLeft} attempts left.`
          )

          if (error.retriesLeft === 0) {
            Logger.error('Consume event failed.', {
              ...stopWatch.stop(name),
            })
          }
        },
      }
    )
  )

/**
 * Monitor Execution Time
 *
 * @description This function is used to monitor the execution time of a subscriber.
 */
const monitorSubscriberExecution = <T extends Function>(target: T) => {
  const descriptors = Object.getOwnPropertyDescriptors(target.prototype)

  for (const [key, descriptor] of Object.entries(descriptors)) {
    if (typeof descriptor.value === 'function' && key === 'execute') {
      const method = descriptor.value as (...args: unknown[]) => Promise<void>

      descriptor.value = async function (...args) {
        const event: Event = args?.[0]

        if (!event)
          throw new Error(
            'Oops!, unable to execute subscriber because we did not find the event.'
          )

        await executeSubscriber(target?.name, async () =>
          method.apply(this, args)
        )
      }

      if (method != descriptor.value) {
        for (const key of Reflect.getMetadataKeys(method)) {
          const value = Reflect.getMetadata(key, method)

          Reflect.defineMetadata(key, value, descriptor.value)
        }
      }

      Object.defineProperty(target.prototype, key, descriptor)
    }
  }
}

export const EventsSubscriber = <T extends Type<Event> = Type<Event>>(
  ...events: T[]
): ClassDecorator => {
  return <T extends Function>(target: T) => {
    for (const event of events) {
      if (!Reflect.hasMetadata(EVENT_METADATA, event)) {
        Reflect.defineMetadata(
          EVENT_METADATA,
          { id: formatToSimpleName(event.name) },
          event
        )
      }
    }

    Reflect.defineMetadata(EVENTS_SUBSCRIBER_METADATA, events, target)

    monitorSubscriberExecution(target)
  }
}
