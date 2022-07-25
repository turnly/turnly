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
import { ITicketsReadableRepo } from 'Tickets/domain/contracts/ITicketsRepo'
import { Ticket } from 'Tickets/domain/entities/Ticket'

import { ActiveTicketsByCustomerQuery } from './ActiveTicketsByCustomerQuery'

@QueryHandler(ActiveTicketsByCustomerQuery)
export class ActiveTicketsByCustomerQueryHandler
  implements IQueryHandler<ActiveTicketsByCustomerQuery, Ticket[]>
{
  public constructor(
    private readonly ticketsReadableRepo: ITicketsReadableRepo
  ) {}

  public async execute({
    customerId,
    organizationId,
  }: ActiveTicketsByCustomerQuery) {
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
