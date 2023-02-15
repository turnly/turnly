/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import {
  Box,
  ICommandHandler,
  IEventSubscriber,
  IQueryHandler,
  IReadableRepository,
  IWritableRepository,
} from '@turnly/shared'
import { AnnounceTicketCommandHandler } from 'Tickets/application/commands/AnnounceTicketCommand'
import { CallTicketCommandHandler } from 'Tickets/application/commands/CallTicketCommand'
import { CreateTicketCommandHandler } from 'Tickets/application/commands/CreateTicketCommand'
import { CreateTicketReadingDBCommandHandler } from 'Tickets/application/commands/CreateTicketReadingDBCommand'
import { DiscardTicketCommandHandler } from 'Tickets/application/commands/DiscardTicketCommand'
import { LeaveTicketCommandHandler } from 'Tickets/application/commands/LeaveTicketCommand'
import { ReturnToQueueCommandHandler } from 'Tickets/application/commands/ReturnToQueueCommand'
import { ServeTicketCommandHandler } from 'Tickets/application/commands/ServeTicketCommand'
import { ActiveTicketsByCustomerQueryHandler } from 'Tickets/application/queries/ActiveTicketsByCustomerQuery'
import { GetAnUnexpiredTicketQueryHandler } from 'Tickets/application/queries/GetAnUnexpiredTicketQuery'
import { TicketByIdQueryHandler } from 'Tickets/application/queries/TicketByIdQuery'
import { TicketsBeforeYoursQueryHandler } from 'Tickets/application/queries/TicketsBeforeYoursQuery'
import { TicketsForServingFromLocationQueryHandler } from 'Tickets/application/queries/TicketsForServingFromLocationQuery'
import { TicketsWaitingForServiceQueryHandler } from 'Tickets/application/queries/TicketsWaitingForServiceQuery'
import { CreateTicketReadingDBSubscriber } from 'Tickets/application/subscribers/CreateTicketReadingDBSubscriber'
import { NotifyCustomerCalledSubscriber } from 'Tickets/application/subscribers/NotifyCustomerCalledSubscriber'
import { Ticket } from 'Tickets/domain/entities/Ticket'

import { TicketsController } from '../api/controllers/TicketsController'
import { TicketsReadableRepo } from '../persistence/mongo/repositories/TicketsReadableRepo'
import { TicketsWritableRepo } from '../persistence/mongo/repositories/TicketsWritableRepo'

export class TicketsFactory {
  public static getController(): TicketsController {
    return Box.resolve<TicketsController>('ticketsController')
  }

  public static getWritableRepo(): IWritableRepository<Ticket> {
    return Box.resolve<TicketsWritableRepo>('ticketsWritableRepo')
  }

  public static getReadableRepo(): IReadableRepository<Ticket> {
    return Box.resolve<TicketsReadableRepo>('ticketsReadableRepo')
  }

  public static getQueryHandlers(): IQueryHandler[] {
    return [
      Box.resolve<TicketByIdQueryHandler>('ticketByIdQueryHandler'),
      Box.resolve<ActiveTicketsByCustomerQueryHandler>(
        'activeTicketsByCustomerQueryHandler'
      ),
      Box.resolve<TicketsBeforeYoursQueryHandler>(
        'ticketsBeforeYoursQueryHandler'
      ),
      Box.resolve<TicketsWaitingForServiceQueryHandler>(
        'ticketsWaitingForServiceQueryHandler'
      ),
      Box.resolve<TicketsForServingFromLocationQueryHandler>(
        'ticketsByLocationQueryHandler'
      ),
      Box.resolve<GetAnUnexpiredTicketQueryHandler>(
        'getAnUnexpiredTicketQueryHandler'
      ),
    ]
  }

  public static getCommandHandlers(): ICommandHandler[] {
    return [
      Box.resolve<CreateTicketCommandHandler>('createTicketCommandHandler'),
      Box.resolve<CreateTicketReadingDBCommandHandler>(
        'createTicketReadingDBCommandHandler'
      ),
      Box.resolve<LeaveTicketCommandHandler>('leaveTicketCommandHandler'),
      Box.resolve<AnnounceTicketCommandHandler>('announceTicketCommandHandler'),
      Box.resolve<CallTicketCommandHandler>('callTicketCommandHandler'),
      Box.resolve<ServeTicketCommandHandler>('serveTicketCommandHandler'),
      Box.resolve<DiscardTicketCommandHandler>('discardTicketCommandHandler'),
      Box.resolve<ReturnToQueueCommandHandler>('returnToQueueCommandHandler'),
    ]
  }

  public static getEventSubscribers(): IEventSubscriber[] {
    return [
      Box.resolve<CreateTicketReadingDBSubscriber>(
        'createTicketReadingDatabaseSubscriber'
      ),
      Box.resolve<NotifyCustomerCalledSubscriber>(
        'notifyCustomerCalledSubscriber'
      ),
    ]
  }
}
