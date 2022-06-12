import { Box, ElasticClient, ioc } from '@turnly/shared'
import { AnnounceTicketCommandHandler } from 'Tickets/application/commands/AnnounceTicketCommand'
import { CreateTicketCommandHandler } from 'Tickets/application/commands/CreateTicketCommand'
import { CreateTicketReadingDBCommandHandler } from 'Tickets/application/commands/CreateTicketReadingDBCommand'
import { LeaveTicketCommandHandler } from 'Tickets/application/commands/LeaveTicketCommand'
import { TicketByIdQueryHandler } from 'Tickets/application/queries/TicketByIdQuery'
import { CreateTicketReadingDBSubscriber } from 'Tickets/application/subscribers/CreateTicketReadingDBSubscriber'

import { TicketsController } from '../api/controllers/TicketsController'
import { TICKETS_ELASTIC_CLIENT_CONFIG } from '../configs/TicketsElasticClient'
import { TicketsWritableForReadableRepo } from '../persistence/elasticsearch/repositories/TicketsWritableForReadableRepo'
import { TicketMapper } from '../persistence/mongo/entity-model-mappers/TicketMapper'
import { TicketReadableRepo } from '../persistence/mongo/repositories/TicketsReadableRepo'
import { TicketsWritableRepo } from '../persistence/mongo/repositories/TicketsWritableRepo'

/**
 * Registers dependencies for the Tickets repos
 */
Box.register({
  ticketsElasticClient: ioc
    .asFunction(async () =>
      new ElasticClient(TICKETS_ELASTIC_CLIENT_CONFIG).connect()
    )
    .singleton(),
})

Box.register({
  ticketsMapper: ioc.asClass(TicketMapper).singleton(),
  ticketsReadableRepo: ioc.asClass(TicketReadableRepo).singleton(),
  ticketsWritableRepo: ioc.asClass(TicketsWritableRepo).singleton(),
  ticketsWritableForReadableRepo: ioc
    .asClass(TicketsWritableForReadableRepo)
    .singleton(),
  ticketsController: ioc.asClass(TicketsController).singleton(),
})

/**
 * Command handlers
 */
Box.register({
  createTicketCommandHandler: ioc
    .asClass(CreateTicketCommandHandler)
    .singleton(),
  createTicketReadingDBCommandHandler: ioc
    .asClass(CreateTicketReadingDBCommandHandler)
    .singleton(),
  leaveTicketCommandHandler: ioc.asClass(LeaveTicketCommandHandler).singleton(),
  announceTicketCommandHandler: ioc
    .asClass(AnnounceTicketCommandHandler)
    .singleton(),
})

/**
 * Event subscribers
 */
Box.register({
  createTicketReadingDatabaseSubscriber: ioc
    .asClass(CreateTicketReadingDBSubscriber)
    .singleton(),
})

/**
 * Query handlers
 */
Box.register({
  ticketByIdQueryHandler: ioc.asClass(TicketByIdQueryHandler).singleton(),
})
