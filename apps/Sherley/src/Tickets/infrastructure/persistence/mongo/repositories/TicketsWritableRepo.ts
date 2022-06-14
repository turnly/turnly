import { MongoWritableRepo } from '@turnly/shared'
import { ITicketsWritableRepo } from 'Tickets/domain/contracts/ITicketsRepo'
import { Ticket } from 'Tickets/domain/entities/Ticket'

import { TicketDocument, TicketModel } from '../models/TicketModel'

export class TicketsWritableRepo
  extends MongoWritableRepo<Ticket, TicketDocument>
  implements ITicketsWritableRepo
{
  public constructor() {
    super(TicketModel)
  }
}
