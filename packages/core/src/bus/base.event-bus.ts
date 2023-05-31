/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import 'reflect-metadata'

import { Logger } from '@turnly/observability'

import { Event } from '../contracts/events/base.event'
import type { IEventBus } from '../contracts/events/event-bus.interface'
import { IEventPublisher } from '../contracts/events/event-publisher.interface'
import type { IEventSubscriber } from '../contracts/events/event-subscriber.interface'
import {
  EVENT_METADATA,
  EVENTS_SUBSCRIBER_METADATA,
} from '../decorators/constants'
import type { Type } from '../types/command.type'
import { LISTEN_TO_ALL_EVENTS } from './base.event-bus.config'
import { RabbitMQEventPublisher } from './rabbitmq'

export type EventSubscriberType<E extends Event = Event> = Type<
  IEventSubscriber<E>
>

export class EventBus<T extends Event = Event> implements IEventBus<T> {
  private isReadyToPublish = false
  private intervalToReadyWarnings: NodeJS.Timeout

  private subscribers: Map<string, IEventSubscriber<T>[]> = new Map()

  public constructor(
    private publisher: IEventPublisher<T> = new RabbitMQEventPublisher()
  ) {}

  public async setup() {
    Logger.info('Setting up event bus ...')

    await this.publisher.setup().then(() => {
      this.isReadyToPublish = true

      clearInterval(this.intervalToReadyWarnings)
    })

    Logger.info('Event bus setup successfully.')

    return this
  }

  public registerPublisher(publisher: IEventPublisher<T>) {
    this.publisher = publisher

    return this
  }

  public async publish<E extends T = T>(events: E[]): Promise<void> {
    if (!this.isReadyToWork() || !events?.length) return

    Logger.debug(`Publishing ${events.length} events ...`, { events })

    await this.publisher.publish(events)

    Logger.debug(`Published ${events.length} events.`)
  }

  public subscribe<S extends IEventSubscriber<T>>(subscribers: S[]): void {
    for (const subscriber of subscribers) {
      const { constructor: subscriberType } = Object.getPrototypeOf(subscriber)

      const events = this.reflectEvents(subscriberType)

      if (!events?.length) {
        this.registerSub(LISTEN_TO_ALL_EVENTS, subscriber)
      }

      if (events) {
        for (const event of events) {
          const eventId = this.reflectEventId(event)

          if (!eventId) return

          this.registerSub(eventId, subscriber)
        }
      }
    }

    this.publisher.setSubscribers(this.subscribers)
  }

  private registerSub(eventId: string, subscriber: IEventSubscriber<T>): void {
    const subscribersForEvent = this.subscribers.get(eventId)

    if (!subscribersForEvent) {
      this.subscribers.set(eventId, [subscriber])
    } else {
      subscribersForEvent.push(subscriber)
    }
  }

  private reflectEvents(
    subscriber: EventSubscriberType<T>
  ): FunctionConstructor[] {
    return Reflect.getMetadata(EVENTS_SUBSCRIBER_METADATA, subscriber)
  }

  private reflectEventId<TE extends FunctionConstructor = FunctionConstructor>(
    event: TE
  ): string {
    return Reflect.getMetadata(EVENT_METADATA, event)?.id ?? null
  }

  private isReadyToWork(): boolean {
    if (!this.isReadyToPublish) {
      this.intervalToReadyWarnings = setInterval(() => {
        Logger.warn(
          'Event bus is not ready to publish events, please wait or check your publisher configuration.'
        )
      }, 2000)
    }

    return this.isReadyToPublish
  }
}
