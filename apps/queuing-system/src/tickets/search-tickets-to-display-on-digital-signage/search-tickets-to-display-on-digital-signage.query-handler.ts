/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { IQueryHandler, OrderTypes, QueryBuilder, QueryHandler } from '@turnly/core'
import { DateTime } from '@turnly/datetime'
import { ITicketsReadableRepo } from 'tickets/shared/domain/contracts/tickets-repo.interface'
import { Ticket } from 'tickets/shared/domain/entities/ticket.entity'
import { TicketStatus } from 'tickets/shared/domain/enums/ticket-status.enum'

import { SearchTicketsToDisplayOnDigitalSignageQuery } from './search-tickets-to-display-on-digital-signage.query'

@QueryHandler(SearchTicketsToDisplayOnDigitalSignageQuery)
export class SearchTicketsToDisplayOnDigitalSignageQueryHandler
  implements IQueryHandler<SearchTicketsToDisplayOnDigitalSignageQuery>
{
  public constructor(
    private readonly ticketsReadableRepo: ITicketsReadableRepo
  ) {}

  public async execute({
    locationId,
    organizationId,
    serviceIds,
    afterCalled,
    order,
    limit,
    offset
  }: SearchTicketsToDisplayOnDigitalSignageQuery) {
    const today = DateTime.today().toJSDate()
    const query = new QueryBuilder<Ticket>()
      .equal('organizationId', organizationId)
      .equal('locationId', locationId)
      .gte('createdAt', today)

    if(afterCalled){
      query.in('status', [TicketStatus.CALLED, TicketStatus.RECALLED, TicketStatus.ANNOUNCED])
    }
    else{
      query.in('status', [TicketStatus.SERVED, TicketStatus.ANNOUNCED])
    }
    if(order === OrderTypes.ASC) query.orderByNewest('createdAt')
    if(order === OrderTypes.DESC) query.orderByOldest('createdAt')

    if (serviceIds?.length) query.in('serviceId', serviceIds)

    return await this.ticketsReadableRepo.find(query.getMany(offset, limit))
  }
}
