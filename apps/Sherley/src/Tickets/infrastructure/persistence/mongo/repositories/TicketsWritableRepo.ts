import { MongoRepository } from '@turnly/shared'
import { ITicketMapper } from 'Tickets/domain/contracts/ITicketsMapper'
import { ITicketsWritableRepo } from 'Tickets/domain/contracts/ITicketsRepo'
import { Ticket } from 'Tickets/domain/entities/Ticket'

import { TicketDocument, TicketModel } from '../models/TicketModel'

export class TicketsWritableRepo
  extends MongoRepository<Ticket, TicketDocument>
  implements ITicketsWritableRepo
{
  public constructor(
    private readonly ticketsMapper: ITicketMapper<TicketDocument>
  ) {
    super(TicketModel)
  }

  public async save(entities: Ticket | Ticket[]): Promise<void> {
    Array.isArray(entities)
      ? await this.bulk(
          entities.map(entity => ({
            id: entity.toObject().id,
            entity,
          }))
        )
      : await this.persist(entities.toObject().id, entities)
  }
}
