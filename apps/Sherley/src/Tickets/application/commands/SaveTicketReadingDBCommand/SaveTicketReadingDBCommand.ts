import { EntityAttributes, ICommand } from '@turnly/core'
import { Ticket } from 'Tickets/domain/entities/Ticket'

export class SaveTicketReadingDBCommand implements ICommand {
  public constructor(public readonly payload: EntityAttributes<Ticket>) {}
}