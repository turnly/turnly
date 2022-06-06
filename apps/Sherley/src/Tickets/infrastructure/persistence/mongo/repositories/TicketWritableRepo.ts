import { MongoRepository } from '@turnly/shared'
import { ITicketMapper } from 'Tickets/domain/contracts/ITicketMapper'
import { ITicketWritableRepo } from 'Tickets/domain/contracts/ITicketRepo'
import { Ticket } from 'Tickets/domain/entities/Ticket'

import { TicketDocument, TicketModel } from '../models/TicketModel'

export class TicketWritableRepo
  extends MongoRepository<Ticket, TicketDocument>
  implements ITicketWritableRepo
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
