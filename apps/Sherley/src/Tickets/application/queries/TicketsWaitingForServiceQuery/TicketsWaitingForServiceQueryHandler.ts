import {
  DateTime,
  IQueryHandler,
  QueryBuilder,
  QueryHandler,
} from '@turnly/shared'
import { ITicketReadableRepo } from 'Tickets/domain/contracts/ITicketsRepo'
import { Ticket } from 'Tickets/domain/entities/Ticket'

import { TicketsWaitingForServiceQuery } from './TicketsWaitingForServiceQuery'

@QueryHandler(TicketsWaitingForServiceQuery)
export class TicketsWaitingForServiceQueryHandler
  implements IQueryHandler<TicketsWaitingForServiceQuery, Ticket[]>
{
  public constructor(
    private readonly ticketsReadableRepo: ITicketReadableRepo
  ) {}

  public async execute({
    serviceId,
    companyId,
  }: TicketsWaitingForServiceQuery) {
    const today = DateTime.utc().startOfDay().toJSDate()

    return await this.ticketsReadableRepo.find(
      new QueryBuilder<Ticket>()
        .equal('companyId', companyId)
        .equal('serviceId', serviceId)
        .in('status', Ticket.getToAttendStatus())
        .gte('createdAt', today)
        .getMany()
    )
  }
}
