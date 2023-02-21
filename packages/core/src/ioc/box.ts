/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
/**
 * Inversion of Control container for the application.
 */
import * as ioc from 'awilix'

import { EventBus } from '../bus/base.event-bus'
import { InMemoryCommandBus } from '../bus/in-memory.command-bus'
import { InMemoryQueryBus } from '../bus/in-memory.query-bus'
import { config } from '../config'
import { NotificationsProvider } from '../notifications/notifications-provider'
import { TwilioNotificationsProvider } from '../notifications/twilio.notifications-provider'
import { ElasticClient } from '../persistence'

/**
 * Inversion of Control
 *
 * @description Box is responsible for registering all
 * the dependencies and building the instances of the objects.
 */
const Box = ioc.createContainer({ injectionMode: ioc.InjectionMode.CLASSIC })

Box.register({
  queryBus: ioc.asFunction(() => new InMemoryQueryBus()).singleton(),
  commandBus: ioc.asFunction(() => new InMemoryCommandBus()).singleton(),
})

let eventBus: EventBus
let elasticClient: ElasticClient
let notificationsProvider: NotificationsProvider

const queryBus = Box.resolve<InMemoryQueryBus>('queryBus')
const commandBus = Box.resolve<InMemoryCommandBus>('commandBus')

if (config.get('elasticsearch.uri')) {
  Box.register({
    elasticClient: ioc
      .asFunction(
        () => new ElasticClient({ node: config.get('elasticsearch.uri') })
      )
      .singleton(),
  })
  elasticClient = Box.resolve<ElasticClient>('elasticClient')
}

if (
  config.get('rabbitmq.uri') &&
  config.get('rabbitmq.queue') &&
  config.get('rabbitmq.exchange')
) {
  Box.register({ eventBus: ioc.asFunction(() => new EventBus()).singleton() })
  eventBus = Box.resolve<EventBus>('eventBus')
}

if (config.get('twilio.sid') && config.get('twilio.token')) {
  Box.register({
    notificationsProvider: ioc.asClass(TwilioNotificationsProvider).singleton(),
  })
  notificationsProvider = Box.resolve<NotificationsProvider>(
    'notificationsProvider'
  )
}

export {
  Box,
  commandBus,
  elasticClient,
  eventBus,
  ioc,
  notificationsProvider,
  queryBus,
}
