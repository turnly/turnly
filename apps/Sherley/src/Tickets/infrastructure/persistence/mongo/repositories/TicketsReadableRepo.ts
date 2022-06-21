import { MongoReadableRepo } from '@turnly/shared'
import { ITicketsMapper } from 'Tickets/domain/contracts/ITicketsMapper'
import { ITicketsReadableRepo } from 'Tickets/domain/contracts/ITicketsRepo'
import { Ticket } from 'Tickets/domain/entities/Ticket'

import { ITicketDocument, TicketModel } from '../models/TicketModel'

export class TicketsReadableRepo
  extends MongoReadableRepo<Ticket, ITicketDocument>
  implements ITicketsReadableRepo
{
  public constructor(ticketsMapper: ITicketsMapper<ITicketDocument>) {
    super(TicketModel, ticketsMapper)
  }
}
