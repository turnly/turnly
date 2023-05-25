/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
/**
 * Inversion of Control container for the application.
 */
import { OIDC } from '@turnly/auth'
import * as ioc from 'awilix'

import { EventBus } from '../bus/base.event-bus'
import { InMemoryCommandBus } from '../bus/in-memory.command-bus'
import { InMemoryEventPublisher } from '../bus/in-memory.event-publisher'
import { InMemoryQueryBus } from '../bus/in-memory.query-bus'
import { RabbitMQEventPublisher } from '../bus/rabbitmq'
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

let elasticClient: ElasticClient
let notificationsProvider: NotificationsProvider
let oidc: OIDC

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

const isRabbit = config.get('rabbitmq.uri') && config.get('rabbitmq.exchange')

const publisher = isRabbit
  ? new RabbitMQEventPublisher()
  : new InMemoryEventPublisher()

Box.register({
  eventBus: ioc.asFunction(() => new EventBus(publisher)).singleton(),
})

const eventBus = Box.resolve<EventBus>('eventBus')

if (config.get('twilio.sid') && config.get('twilio.token')) {
  Box.register({
    notificationsProvider: ioc.asClass(TwilioNotificationsProvider).singleton(),
  })
  notificationsProvider = Box.resolve<NotificationsProvider>(
    'notificationsProvider'
  )
}

if (
  config.get('auth.issuer') &&
  config.get('auth.jwks_uri') &&
  config.get('auth.tokenTypeClaim')
) {
  Box.register({
    oidc: ioc.asFunction(
      () =>
        new OIDC({
          issuer: config.get('auth.issuer'),
          jwks: {
            jwksUri: config.get('auth.jwks_uri'),
          },
          tokenType: {
            claim: config.get('auth.tokenTypeClaim'),
            type: 'Bearer',
          },
        })
    ),
  })
  oidc = Box.resolve<OIDC>('oidc')
}

export {
  Box,
  commandBus,
  elasticClient,
  eventBus,
  ioc,
  notificationsProvider,
  oidc,
  queryBus,
}
