/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/shared'
import { AnnounceTicketCommandHandler } from 'Tickets/application/commands/AnnounceTicketCommand'
import { CreateTicketCommandHandler } from 'Tickets/application/commands/CreateTicketCommand'
import { CreateTicketReadingDBCommandHandler } from 'Tickets/application/commands/CreateTicketReadingDBCommand'
import { LeaveTicketCommandHandler } from 'Tickets/application/commands/LeaveTicketCommand'
import { ActiveTicketsByCustomerQueryHandler } from 'Tickets/application/queries/ActiveTicketsByCustomerQuery'
import { TicketByIdQueryHandler } from 'Tickets/application/queries/TicketByIdQuery'
import { TicketsBeforeYoursQueryHandler } from 'Tickets/application/queries/TicketsBeforeYoursQuery'
import { TicketsWaitingForServiceQueryHandler } from 'Tickets/application/queries/TicketsWaitingForServiceQuery'
import { CreateTicketReadingDBSubscriber } from 'Tickets/application/subscribers/CreateTicketReadingDBSubscriber'

import { TicketsController } from '../api/controllers/TicketsController'
import { TicketsWritableForReadableRepo } from '../persistence/elasticsearch/repositories/TicketsWritableForReadableRepo'
import { TicketsMapper } from '../persistence/mongo/entity-model-mappers/TicketsMapper'
import { TicketsReadableRepo } from '../persistence/mongo/repositories/TicketsReadableRepo'
import { TicketsWritableRepo } from '../persistence/mongo/repositories/TicketsWritableRepo'

Box.register({
  ticketsMapper: ioc.asClass(TicketsMapper).singleton(),
  ticketsReadableRepo: ioc.asClass(TicketsReadableRepo).singleton(),
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
  activeTicketsByCustomerQueryHandler: ioc
    .asClass(ActiveTicketsByCustomerQueryHandler)
    .singleton(),
  ticketsBeforeYoursQueryHandler: ioc
    .asClass(TicketsBeforeYoursQueryHandler)
    .singleton(),
  ticketsWaitingForServiceQueryHandler: ioc
    .asClass(TicketsWaitingForServiceQueryHandler)
    .singleton(),
})
