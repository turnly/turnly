import { ICommandHandler, IEventSubscriber, IQueryHandler } from '@turnly/core'
import { Box } from '@turnly/core'
import { CreateTicketCommandHandler } from 'Tickets/application/commands/CreateTicketCommand'
import { SaveTicketReadingDBCommandHandler } from 'Tickets/application/commands/SaveTicketReadingDBCommand'
import { SaveTicketReadingDBSubscriber } from 'Tickets/application/subscribers/SaveTicketReadingDBSubscriber'

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
      Box.resolve<SaveTicketReadingDBCommandHandler>(
        'saveTicketReadingDBCommandHandler'
      ),
    ]
  }

  public static getEventSubscribers(): IEventSubscriber[] {
    return [
      Box.resolve<SaveTicketReadingDBSubscriber>(
        'saveTicketReadingDatabaseSubscriber'
      ),
    ]
  }
}
