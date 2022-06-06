import { EntityAttributes, ICommand } from '@turnly/shared'
import { Ticket } from 'Tickets/domain/entities/Ticket'

export class CreateTicketReadingDBCommand implements ICommand {
  public constructor(public readonly payload: EntityAttributes<Ticket>) {}
}
