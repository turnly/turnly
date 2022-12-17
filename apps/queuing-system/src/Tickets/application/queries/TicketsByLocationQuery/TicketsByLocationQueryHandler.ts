/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
// import { Guid } from '@turnly/common'
import {
  DateTime,
  IQueryHandler,
  QueryBuilder,
  QueryHandler,
} from '@turnly/shared'
import { ITicketsReadableRepo } from 'Tickets/domain/contracts/ITicketsRepo'
import { Ticket } from 'Tickets/domain/entities/Ticket'

import { TicketsByLocationQuery } from './TicketsByLocationQuery'

@QueryHandler(TicketsByLocationQuery)
export class TicketsByLocationQueryHandler
  implements IQueryHandler<TicketsByLocationQuery>
{
  public constructor(
    private readonly ticketsReadableRepo: ITicketsReadableRepo
  ) {}

  public async execute({
    locationId,
    organizationId,
    status,
    serviceIds,
    searchQuery,
  }: TicketsByLocationQuery) {
    const today = DateTime.today().toJSDate()
    const query = new QueryBuilder<Ticket>()
      .equal('organizationId', organizationId)
      .equal('locationId', locationId)
      .gte('createdAt', today)

    if (status) query.in('status', status)
    if (searchQuery) query.matches(['displayCode'], searchQuery)
    if (serviceIds?.length) query.in('serviceId', serviceIds)

    return await this.ticketsReadableRepo.find(query.getMany())
  }
}
