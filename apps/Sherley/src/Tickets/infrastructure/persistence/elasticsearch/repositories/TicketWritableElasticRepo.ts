import { ResourceNotCreatedError } from '@turnly/common'
import {
  ElasticClient,
  ElasticIndexes,
  ElasticRepository,
} from '@turnly/shared'
import { ITicketWritableRepo } from 'Tickets/domain/contracts/ITicketRepo'
import { Ticket } from 'Tickets/domain/entities/Ticket'

export class TicketWritableElasticRepo
  extends ElasticRepository<Ticket>
  implements ITicketWritableRepo
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
