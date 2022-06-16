import { Nullable } from '@turnly/common'
import {
  DateTime,
  IQueryHandler,
  QueryBuilder,
  QueryHandler,
} from '@turnly/shared'
import { ITicketReadableRepo } from 'Tickets/domain/contracts/ITicketsRepo'
import { Ticket } from 'Tickets/domain/entities/Ticket'

import { GetActiveTicketsByCustomerQuery } from './GetActiveTicketsByCustomerQuery'

@QueryHandler(GetActiveTicketsByCustomerQuery)
export class GetActiveTicketsByCustomerQueryHandler
  implements IQueryHandler<GetActiveTicketsByCustomerQuery, Nullable<Ticket[]>>
{
  public constructor(
    private readonly ticketsReadableRepo: ITicketReadableRepo
  ) {}

  public async execute({ payload }: GetActiveTicketsByCustomerQuery) {
    const { customerId, companyId } = payload

    const lastHour = DateTime.utc().minusHours(1).toJSDate()

    const query = new QueryBuilder<Ticket>()
      .equal('customerId', customerId)
      .equal('companyId', companyId)
      .gte('createdAt', lastHour)
      .in('status', Ticket.getToAttendStatus())
      .getMany()

    return await this.ticketsReadableRepo.find(query)
  }
}
