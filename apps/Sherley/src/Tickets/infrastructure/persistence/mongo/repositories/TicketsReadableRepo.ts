import { Guid, Nullable } from '@turnly/common'
import { MongoRepository, QueryBuilderObject } from '@turnly/shared'
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

  public async getOne(id: Guid): Promise<Nullable<Ticket>> {
    const document = await this.model.findById(id)

    return document ? this.ticketsMapper.toEntity(document) : null
  }

  public async find(
    query: QueryBuilderObject<Ticket>
  ): Promise<Ticket[] | Nullable<Ticket>> {
    const documents = await this.search(query)

    return Array.isArray(documents)
      ? this.ticketsMapper.toEntityList(documents)
      : documents
      ? this.ticketsMapper.toEntity(documents)
      : null
  }
}
