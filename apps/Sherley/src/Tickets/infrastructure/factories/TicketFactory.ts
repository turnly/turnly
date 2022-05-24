import { ICommandHandler, IEventSubscriber, IQueryHandler } from '@turnly/core'
import { Box } from 'Shared/infrastructure/dependencies'
import { ITicketReadableRepository } from 'Tickets/domain/contracts/ITicketRepository'

import { TicketsController } from '../api/controllers/TicketsController'

export class TicketFactory {
  public static getReadableRepository(): ITicketReadableRepository {
    return Box.resolve<ITicketReadableRepository>('ticketsReadableRepository')
  }

  public static getController(): TicketsController {
    return Box.resolve<TicketsController>('ticketsController')
  }

  public static getQueryHandlers(): IQueryHandler[] {
    return []
  }

  public static getCommandHandlers(): ICommandHandler[] {
    return []
  }

  public static getEventSubscribers(): IEventSubscriber[] {
    return []
  }
}
