/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import {
  IQueryHandler,
  OrderTypes,
  QueryBuilder,
  QueryHandler,
} from '@turnly/core'
import { DateTime } from '@turnly/datetime'
import { BadRequestException } from '@turnly/observability'
import { ITicketsReadableRepo } from 'tickets/shared/domain/contracts/tickets-repo.interface'
import { Ticket } from 'tickets/shared/domain/entities/ticket.entity'
import { TicketStatus } from 'tickets/shared/domain/enums/ticket-status.enum'

import {
  ClearTicketsAfter,
  ListTicketsForSignageDisplaysQuery,
} from './list-tickets-for-signage-displays.query'

@QueryHandler(ListTicketsForSignageDisplaysQuery)
export class ListTicketsForSignageDisplaysQueryHandler
  implements IQueryHandler<ListTicketsForSignageDisplaysQuery>
{
  public constructor(
    private readonly ticketsReadableRepo: ITicketsReadableRepo
  ) {}

  public async execute({
    locationId,
    organizationId,
    serviceIds,
    clearTicketsAfter,
    order,
    limit,
    offset,
  }: ListTicketsForSignageDisplaysQuery) {
    const today = DateTime.today().toJSDate()
    const query = new QueryBuilder<Ticket>()
      .equal('organizationId', organizationId)
      .equal('locationId', locationId)
      .in('status', this.getStatuses(clearTicketsAfter))
      .gte('createdAt', today)

    if (order === OrderTypes.ASC) query.orderByNewest('createdAt')
    if (order === OrderTypes.DESC) query.orderByOldest('createdAt')

    if (serviceIds?.length) query.in('serviceId', serviceIds)

    return await this.ticketsReadableRepo.find(query.getMany(offset, limit))
  }

  private getStatuses(clearTicketsAfter: ClearTicketsAfter) {
    if (!Object.values(ClearTicketsAfter).includes(clearTicketsAfter)) {
      throw new BadRequestException(
        'Oops! You have provided an invalid clearTicketsAfter value.'
      )
    }

    const statuses = {
      [ClearTicketsAfter.CALLING]: [TicketStatus.ANNOUNCED],
      [ClearTicketsAfter.SERVING]: [
        TicketStatus.CALLED,
        TicketStatus.RECALLED,
        TicketStatus.ANNOUNCED,
      ],
    }

    return statuses[clearTicketsAfter]
  }
}
