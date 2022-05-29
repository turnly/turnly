import { Box, ioc } from '@turnly/shared'
import { CreateTicketCommandHandler } from 'Tickets/application/commands/CreateTicketCommand'
import { SaveTicketReadingDBCommandHandler } from 'Tickets/application/commands/SaveTicketReadingDBCommand'
import { SaveTicketReadingDBSubscriber } from 'Tickets/application/subscribers/SaveTicketReadingDBSubscriber'
import { CreateTicketUseCase } from 'Tickets/application/use-cases/CreateTicketUseCase'

import { TicketsController } from '../api/controllers/TicketsController'
import { TicketWritableElasticRepository } from '../persistence/elasticsearch/repositories/TicketWritableElasticRepository'
import { TicketMapper } from '../persistence/mongo/entity-model-mappers/TicketMapper'
import { TicketReadableRepository } from '../persistence/mongo/repositories/TicketReadableRepository'
import { TicketWritableRepository } from '../persistence/mongo/repositories/TicketWritableRepository'

Box.register({
  ticketsMapper: ioc.asClass(TicketMapper).singleton(),
  ticketsReadableRepository: ioc.asClass(TicketReadableRepository).singleton(),
  ticketsWritableRepository: ioc.asClass(TicketWritableRepository).singleton(),
  ticketWritableElasticRepository: ioc
    .asClass(TicketWritableElasticRepository)
    .singleton(),
  ticketsController: ioc.asClass(TicketsController).singleton(),
})

/**
 * Use cases
 */
Box.register({
  createTicketUseCase: ioc.asClass(CreateTicketUseCase).singleton(),
})

/**
 * Command handlers
 */
Box.register({
  createTicketCommandHandler: ioc
    .asClass(CreateTicketCommandHandler)
    .singleton(),
  saveTicketReadingDBCommandHandler: ioc
    .asClass(SaveTicketReadingDBCommandHandler)
    .singleton(),
})

/**
 * Event subscribers
 */
Box.register({
  saveTicketReadingDatabaseSubscriber: ioc
    .asClass(SaveTicketReadingDBSubscriber)
    .singleton(),
})
