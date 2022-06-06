import {
  ICommandHandler,
  IEventSubscriber,
  IQueryHandler,
} from '@turnly/shared'
import { Box } from '@turnly/shared'
import { CreateTicketCommandHandler } from 'Tickets/application/commands/CreateTicketCommand'
import { CreateTicketReadingDBCommandHandler } from 'Tickets/application/commands/CreateTicketReadingDBCommand'
import { CreateTicketReadingDBSubscriber } from 'Tickets/application/subscribers/CreateTicketReadingDBSubscriber'

import { TicketsController } from '../api/controllers/TicketsController'

export class TicketFactory {
  public static getController(): TicketsController {
    return Box.resolve<TicketsController>('ticketsController')
  }

  public static getQueryHandlers(): IQueryHandler[] {
    return []
  }

  public static getCommandHandlers(): ICommandHandler[] {
    return [
      Box.resolve<CreateTicketCommandHandler>('createTicketCommandHandler'),
      Box.resolve<CreateTicketReadingDBCommandHandler>(
        'createTicketReadingDBCommandHandler'
      ),
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
