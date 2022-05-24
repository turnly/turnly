import { MongoRepository } from '@turnly/core'
import { ITicketMapper } from 'Tickets/domain/contracts/ITicketMapper'
import { ITicketWritableRepository } from 'Tickets/domain/contracts/ITicketRepository'
import { Ticket } from 'Tickets/domain/entities/Ticket'

import { TicketDocument, TicketModel } from '../models/TicketModel'

export class TicketWritableRepository
  extends MongoRepository<Ticket, TicketDocument>
  implements ITicketWritableRepository
{
  public constructor(
    private readonly ticketsMapper: ITicketMapper<TicketDocument>
  ) {
    super(TicketModel)
  }

  public async save(entity: Ticket): Promise<Ticket> {
    const document = await this.persist(entity.toObject().id, entity)

    return this.ticketsMapper.toEntity(document)
  }
}
