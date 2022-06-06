import { Guid, NotImplementedError, Nullable } from '@turnly/common'
import { Criteria, MongoRepository } from '@turnly/shared'
import { ITicketMapper } from 'Tickets/domain/contracts/ITicketsMapper'
import { ITicketReadableRepo } from 'Tickets/domain/contracts/ITicketsRepo'
import { Ticket } from 'Tickets/domain/entities/Ticket'

import { TicketDocument, TicketModel } from '../models/TicketModel'

export class TicketReadableRepo
  extends MongoRepository<Ticket, TicketDocument>
  implements ITicketReadableRepo
{
  public constructor(
    private readonly ticketsMapper: ITicketMapper<TicketDocument>
  ) {
    super(TicketModel)
  }

  public async getById(id: Guid): Promise<Nullable<Ticket>> {
    const document = await this.model.findById(id)

    return document ? this.ticketsMapper.toEntity(document) : null
  }

  public async search(_query: Criteria): Promise<Nullable<Ticket[]>> {
    throw new NotImplementedError()
  }
}
