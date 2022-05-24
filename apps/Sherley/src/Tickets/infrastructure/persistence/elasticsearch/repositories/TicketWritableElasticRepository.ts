import { ElasticClient, ElasticIndexes, ElasticRepository } from '@turnly/core'
import { ResourceNotCreatedError } from '@turnly/shared'
import { ITicketWritableRepository } from 'Tickets/domain/contracts/ITicketRepository'
import { Ticket } from 'Tickets/domain/entities/Ticket'

export class TicketWritableElasticRepository
  extends ElasticRepository<Ticket>
  implements ITicketWritableRepository
{
  public constructor(elasticSearchClient: ElasticClient) {
    super(elasticSearchClient, ElasticIndexes.TICKETS)
  }

  public async save(entity: Ticket): Promise<Ticket> {
    const response = await this.persist(entity.toObject().id, entity)

    if (!response) throw new ResourceNotCreatedError()

    return entity
  }
}
