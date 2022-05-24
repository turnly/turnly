import { EventBus, InMemoryCommandBus, InMemoryQueryBus } from '@turnly/core'
/**
 * Inversion of Control container for the application.
 */
import * as ioc from 'awilix'
/**
 * Tickets module
 */
import { TicketsController } from 'Tickets/infrastructure/api/controllers/TicketsController'
import { TicketMapper } from 'Tickets/infrastructure/persistence/mongo/entity-model-mappers/TicketMapper'
import { TicketReadableRepository } from 'Tickets/infrastructure/persistence/mongo/repositories/TicketReadableRepository'

const box = ioc.createContainer({
  injectionMode: ioc.InjectionMode.CLASSIC,
})

/**
 * Register the infrastructure services
 */
box.register({
  queryBus: ioc.asFunction(() => new InMemoryQueryBus()).singleton(),
  commandBus: ioc.asFunction(() => new InMemoryCommandBus()).singleton(),
  eventBus: ioc.asFunction(() => new EventBus()).singleton(),
})

/**
 * Register the Tickets
 */
box.register({
  ticketsMapper: ioc.asClass(TicketMapper).singleton(),
  ticketsReadableRepository: ioc.asClass(TicketReadableRepository).singleton(),
  ticketsController: ioc.asClass(TicketsController).singleton(),
})

export { box }
