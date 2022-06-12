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
}
