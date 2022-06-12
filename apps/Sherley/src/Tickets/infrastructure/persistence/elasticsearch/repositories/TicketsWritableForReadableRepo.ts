import { ElasticClient, ElasticRepository } from '@turnly/shared'
import { ITicketsWritableRepo } from 'Tickets/domain/contracts/ITicketsRepo'
import { Ticket } from 'Tickets/domain/entities/Ticket'

export class TicketsWritableForReadableRepo
  extends ElasticRepository<Ticket>
  implements ITicketsWritableRepo
{
  public constructor(ticketsElasticClient: ElasticClient) {
    super(ticketsElasticClient)
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
