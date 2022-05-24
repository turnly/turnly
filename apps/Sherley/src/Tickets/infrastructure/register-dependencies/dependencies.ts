/**
 * Integrations module
 */
import { Box, ioc } from '@turnly/core'
import { TakeTicketUseCase } from 'Tickets/application/use-cases/TakeTicketUseCase'

import { TicketsController } from '../api/controllers/TicketsController'
import { TicketMapper } from '../persistence/mongo/entity-model-mappers/TicketMapper'
import { TicketReadableRepository } from '../persistence/mongo/repositories/TicketReadableRepository'

/**
 * Register the Tickets
 */
Box.register({
  ticketsMapper: ioc.asClass(TicketMapper).singleton(),
  ticketsReadableRepository: ioc.asClass(TicketReadableRepository).singleton(),
  ticketsController: ioc.asClass(TicketsController).singleton(),
})

/**
 * Register the use cases of Tickets module
 */
Box.register({
  takeTicketUseCase: ioc.asClass(TakeTicketUseCase).singleton(),
})
