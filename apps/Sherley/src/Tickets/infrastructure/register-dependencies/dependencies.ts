import { Box, ioc } from '@turnly/shared'
import { CreateTicketCommandHandler } from 'Tickets/application/commands/CreateTicketCommand'
import { SaveTicketReadingDBCommandHandler } from 'Tickets/application/commands/SaveTicketReadingDBCommand'
import { SaveTicketReadingDBSubscriber } from 'Tickets/application/subscribers/SaveTicketReadingDBSubscriber'
import { CreateTicketUseCase } from 'Tickets/application/use-cases/CreateTicketUseCase'

import { TicketsController } from '../api/controllers/TicketsController'
import { TicketWritableElasticRepo } from '../persistence/elasticsearch/repositories/TicketWritableElasticRepo'
import { TicketMapper } from '../persistence/mongo/entity-model-mappers/TicketMapper'
import { TicketReadableRepo } from '../persistence/mongo/repositories/TicketReadableRepo'
import { TicketWritableRepo } from '../persistence/mongo/repositories/TicketWritableRepo'

Box.register({
  ticketsMapper: ioc.asClass(TicketMapper).singleton(),
  ticketsReadableRepo: ioc.asClass(TicketReadableRepo).singleton(),
  ticketsWritableRepo: ioc.asClass(TicketWritableRepo).singleton(),
  ticketWritableElasticRepo: ioc
    .asClass(TicketWritableElasticRepo)
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
