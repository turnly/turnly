/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/shared'
import { AnnounceTicketCommandHandler } from 'Tickets/application/commands/AnnounceTicketCommand'
import { CallTicketCommandHandler } from 'Tickets/application/commands/CallTicketCommand'
import { CreateTicketCommandHandler } from 'Tickets/application/commands/CreateTicketCommand'
import { CreateTicketReadingDBCommandHandler } from 'Tickets/application/commands/CreateTicketReadingDBCommand'
import { LeaveTicketCommandHandler } from 'Tickets/application/commands/LeaveTicketCommand'
import { ResolveTicketCommandHandler } from 'Tickets/application/commands/ResolveTicketCommand'
import { ActiveTicketsByCustomerQueryHandler } from 'Tickets/application/queries/ActiveTicketsByCustomerQuery'
import { TicketByIdQueryHandler } from 'Tickets/application/queries/TicketByIdQuery'
import { TicketsBeforeYoursQueryHandler } from 'Tickets/application/queries/TicketsBeforeYoursQuery'
import { TicketsForServingFromLocationQueryHandler } from 'Tickets/application/queries/TicketsForServingFromLocationQuery'
import { TicketsWaitingForServiceQueryHandler } from 'Tickets/application/queries/TicketsWaitingForServiceQuery'
import { CreateTicketReadingDBSubscriber } from 'Tickets/application/subscribers/CreateTicketReadingDBSubscriber'
import { NotifyCustomerCalledSubscriber } from 'Tickets/application/subscribers/NotifyCustomerCalledSubscriber'

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
  resolveTicketCommandHandler: ioc
    .asClass(ResolveTicketCommandHandler)
    .singleton(),
  callTicketCommandHandler: ioc.asClass(CallTicketCommandHandler).singleton(),
})

/**
 * Event subscribers
 */
Box.register({
  createTicketReadingDatabaseSubscriber: ioc
    .asClass(CreateTicketReadingDBSubscriber)
    .singleton(),
  notifyCustomerCalledSubscriber: ioc
    .asClass(NotifyCustomerCalledSubscriber)
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
  ticketsByLocationQueryHandler: ioc
    .asClass(TicketsForServingFromLocationQueryHandler)
    .singleton(),
})
