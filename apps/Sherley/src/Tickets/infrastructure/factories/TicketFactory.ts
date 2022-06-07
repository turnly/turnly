import {
  ICommandHandler,
  IEventSubscriber,
  IQueryHandler,
} from '@turnly/shared'
import { Box } from '@turnly/shared'
import { CreateTicketCommandHandler } from 'Tickets/application/commands/CreateTicketCommand'
import { CreateTicketReadingDBCommandHandler } from 'Tickets/application/commands/CreateTicketReadingDBCommand'
import { LeaveTicketCommandHandler } from 'Tickets/application/commands/LeaveTicketCommand'
import { TicketByIdQueryHandler } from 'Tickets/application/queries/TicketByIdQuery'
import { CreateTicketReadingDBSubscriber } from 'Tickets/application/subscribers/CreateTicketReadingDBSubscriber'

import { TicketsController } from '../api/controllers/TicketsController'

export class TicketFactory {
  public static getController(): TicketsController {
    return Box.resolve<TicketsController>('ticketsController')
  }

  public static getQueryHandlers(): IQueryHandler[] {
    return [Box.resolve<TicketByIdQueryHandler>('ticketByIdQueryHandler')]
  }

  public static getCommandHandlers(): ICommandHandler[] {
    return [
      Box.resolve<CreateTicketCommandHandler>('createTicketCommandHandler'),
      Box.resolve<CreateTicketReadingDBCommandHandler>(
        'createTicketReadingDBCommandHandler'
      ),
      Box.resolve<LeaveTicketCommandHandler>('leaveTicketCommandHandler'),
    ]
  }

  public static getEventSubscribers(): IEventSubscriber[] {
    return [
      Box.resolve<CreateTicketReadingDBSubscriber>(
        'createTicketReadingDatabaseSubscriber'
      ),
    ]
  }
}
