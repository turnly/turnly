import { MongoRepository } from '@turnly/shared'
import { ITicketMapper } from 'Tickets/domain/contracts/ITicketsMapper'
import { ITicketReadableRepo } from 'Tickets/domain/contracts/ITicketsRepo'
import { Ticket } from 'Tickets/domain/entities/Ticket'

import { TicketDocument, TicketModel } from '../models/TicketModel'

export class TicketReadableRepo
  extends MongoRepository<Ticket, TicketDocument>
  implements ITicketReadableRepo
{
  public constructor(ticketsMapper: ITicketMapper<TicketDocument>) {
    super(TicketModel, ticketsMapper)
  }
}
