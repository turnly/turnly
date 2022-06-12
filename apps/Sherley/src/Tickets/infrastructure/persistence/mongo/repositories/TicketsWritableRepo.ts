import { MongoRepository } from '@turnly/shared'
import { ITicketMapper } from 'Tickets/domain/contracts/ITicketsMapper'
import { ITicketsWritableRepo } from 'Tickets/domain/contracts/ITicketsRepo'
import { Ticket } from 'Tickets/domain/entities/Ticket'

import { TicketDocument, TicketModel } from '../models/TicketModel'

export class TicketsWritableRepo
  extends MongoRepository<Ticket, TicketDocument>
  implements ITicketsWritableRepo
{
  public constructor(ticketsMapper: ITicketMapper<TicketDocument>) {
    super(TicketModel, ticketsMapper)
  }
}
