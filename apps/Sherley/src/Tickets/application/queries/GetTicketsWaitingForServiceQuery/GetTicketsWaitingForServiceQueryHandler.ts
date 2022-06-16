import {
  DateTime,
  IQueryHandler,
  QueryBuilder,
  QueryHandler,
} from '@turnly/shared'
import { ITicketReadableRepo } from 'Tickets/domain/contracts/ITicketsRepo'
import { Ticket } from 'Tickets/domain/entities/Ticket'

import { GetTicketsWaitingForServiceQuery } from './GetTicketsWaitingForServiceQuery'

@QueryHandler(GetTicketsWaitingForServiceQuery)
export class GetTicketsWaitingForServiceQueryHandler
  implements IQueryHandler<GetTicketsWaitingForServiceQuery, Ticket[]>
{
  public constructor(
    private readonly ticketsReadableRepo: ITicketReadableRepo
  ) {}

  public async execute({ payload }: GetTicketsWaitingForServiceQuery) {
    const { serviceId, companyId } = payload

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
