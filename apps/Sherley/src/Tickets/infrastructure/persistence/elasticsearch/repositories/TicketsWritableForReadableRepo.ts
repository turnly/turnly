import { ResourceNotCreatedError } from '@turnly/common'
import {
  ElasticClient,
  ElasticIndexes,
  ElasticRepository,
} from '@turnly/shared'
import { ITicketsWritableRepo } from 'Tickets/domain/contracts/ITicketsRepo'
import { Ticket } from 'Tickets/domain/entities/Ticket'

export class TicketsWritableForReadableRepo
  extends ElasticRepository<Ticket>
  implements ITicketsWritableRepo
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
