/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import {
  DateTime,
  IQueryHandler,
  QueryBuilder,
  QueryHandler,
} from '@turnly/shared'
import { ITicketsReadableRepo } from 'tickets/shared/domain/contracts/ITicketsRepo'
import { Ticket } from 'tickets/shared/domain/entities/Ticket'

import { GetActiveTicketsByCustomerQuery } from './get-active-tickets-by-customer.query'

@QueryHandler(GetActiveTicketsByCustomerQuery)
export class GetActiveTicketsByCustomerQueryHandler
  implements IQueryHandler<GetActiveTicketsByCustomerQuery, Ticket[]>
{
  public constructor(
    private readonly ticketsReadableRepo: ITicketsReadableRepo
  ) {}

  public async execute({
    customerId,
    organizationId,
  }: GetActiveTicketsByCustomerQuery) {
    const lastHour = DateTime.now().minusHours(1).toJSDate()

    const query = new QueryBuilder<Ticket>()
      .equal('customerId', customerId)
      .equal('organizationId', organizationId)
      .gte('createdAt', lastHour)
      .in('status', Ticket.getToAttendStatus())
      .getMany()

    return await this.ticketsReadableRepo.find(query)
  }
}
