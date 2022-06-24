import {
  ElasticClient,
  ElasticIndexes,
  ElasticWritableRepo,
} from '@turnly/shared'
import { ITicketsWritableRepo } from 'Tickets/domain/contracts/ITicketsRepo'
import { Ticket } from 'Tickets/domain/entities/Ticket'

export class TicketsWritableForReadableRepo
  extends ElasticWritableRepo<Ticket>
  implements ITicketsWritableRepo
{
  public constructor(elasticClient: ElasticClient) {
    super(elasticClient, ElasticIndexes.TICKETS)
  }
}
