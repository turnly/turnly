import { ICommandHandler, IEventSubscriber, IQueryHandler } from '@turnly/core'
import { Box } from '@turnly/core'
import { CreateTicketCommandHandler } from 'Tickets/application/commands/CreateTicketCommand'
import { SaveTicketReadingDatabaseSubscriber } from 'Tickets/application/subscribers/SaveTicketReadingDatabaseSubscriber'

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
    ]
  }

  public static getEventSubscribers(): IEventSubscriber[] {
    return [
      Box.resolve<SaveTicketReadingDatabaseSubscriber>(
        'saveTicketReadingDatabaseSubscriber'
      ),
    ]
  }
}
