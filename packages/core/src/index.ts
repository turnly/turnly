/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */

/**
 * Domain
 */
export * from './constants/event-type.enum'
export * from './constants/shared-messages.enum'

/**
 * CQRS
 */
export * from './contracts/cqrs/command.interface'
export * from './contracts/cqrs/command-bus.interface'
export * from './contracts/cqrs/command-handler.interface'
export * from './contracts/cqrs/query.interface'
export * from './contracts/cqrs/query-bus.interface'
export * from './contracts/cqrs/query-handler.interface'

/**
 * CQRS - Decorators
 */
export * from './decorators/command-handler.decorator'
export * from './decorators/events-subscriber.decorator'
export * from './decorators/query-handler.decorator'

/**
 * Contracts
 */
export * from './contracts/middleware.interface'
export * from './contracts/providers/queue.interface'
export * from './contracts/repositories'
export * from './contracts/setup.interface'
export * from './contracts/use-case.interface'

/**
 * Builder
 */
export * from './query-builder/filter.value-object'
export * from './query-builder/filter-field.value-object'
export * from './query-builder/filter-operator.value-object'
export * from './query-builder/order.value-object'
export * from './query-builder/order-by.value-object'
export * from './query-builder/order-type.value-object'
export * from './query-builder/query-builder'

/**
 * Entities
 */
export * from './entities/aggregate-root'
export * from './entities/base.entity'

/**
 * Persistence
 */
export * from './contracts/persistence/db-connection.interface'
export * from './contracts/persistence/entity-mapper.interface'
export * from './contracts/persistence/memory-database.interface'

/**
 * Value objects
 */
export * from './value-objects/enum.value-object'
export * from './value-objects/invalid-argument.error'
export * from './value-objects/list.value-object'
export * from './value-objects/queue-message.value-object'
export * from './value-objects/string.value-object'

/**
 * Domain Events
 */
export * from './contracts/events/base.event'
export * from './contracts/events/event-bus.interface'
export * from './contracts/events/event-publisher.interface'
export * from './contracts/events/event-subscriber.interface'

/**
 * Errors
 */
export * from './errors/command-handler-not-found.error'
export * from './errors/invalid-command-handler.error'
export * from './errors/invalid-events-subscriber.error'
export * from './errors/invalid-query-handler.error'
export * from './errors/query-handler-not-found.error'

/**
 * Helpers
 */
export * from './helpers/instance-validator.util'
export * from './helpers/simple-name.util'

/**
 * Types
 */
export * from './types/command.type'
export * from './types/entity-attributes.type'
export * from './types/query.type'

/**
 * Infrastructure
 */
/**
 * API
 */
export * from './api/base.controller'
export * from './api/base.routes'
export * from './api/decorators/input-validator.decorator'
export * from './api/decorators/request-handler.decorator'
export * from './api/decorators/request-object.decorator'
export * from './api/decorators/timeout-handler.decorator'
export * from './api/http'
export * from './api/startup'
export * from './api/validator'
export * from './constants/versions.enum'

/**
 * Providers
 */
export * from './encryption'
export * from './persistence'

/**
 * Bus
 */
export * from './bus/base.event-bus'
export * from './bus/in-memory.command-bus'
export * from './bus/in-memory.query-bus'
export * from './bus/rabbitmq'

/**
 * Inversion of Control
 */
export * from './ioc'

/**
 * Arranger
 */
export * from './arranger/base.arranger'
export * from './arranger/elastic-db.arranger'
export * from './arranger/mongo-db.arranger'

/**
 * Notifications
 */
export * from './notifications/notifications-provider'
export * from './notifications/notifications-response'
export { AbortError as AbortRetryingError } from 'p-retry'

/**
 * CQRS
 */
export * from './commands/authenticated.command'
export * from './commands/base.command'
export * from './commands/with-extra.command'
export * from './commands/with-organization.command'
export * from './queries/authenticated.query'
export * from './queries/base.query'
export * from './queries/with-extra.query'
export * from './queries/with-organization.query'

/**
 * Class validator
 */
export * as ClassValidators from 'class-validator'

/**
 * Config
 */
export * from './config'
