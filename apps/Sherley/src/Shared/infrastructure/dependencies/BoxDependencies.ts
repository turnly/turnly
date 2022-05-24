import { EventBus, InMemoryCommandBus, InMemoryQueryBus } from '@turnly/core'
/**
 * Inversion of Control container for the application.
 */
import * as ioc from 'awilix'
import { TakeTicketUseCase } from 'Tickets/application/use-cases/TakeTicketUseCase'
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

/**
 * Register the use cases of Tickets module
 */
box.register({
  takeTicketUseCase: ioc.asClass(TakeTicketUseCase).singleton(),
})

export { box }
