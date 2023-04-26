/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { IQueryHandler, QueryBuilder, QueryHandler } from '@turnly/core'
import { DateTime } from '@turnly/datetime'
import { ITicketsReadableRepo } from 'tickets/shared/domain/contracts/tickets-repo.interface'
import { Ticket } from 'tickets/shared/domain/entities/ticket.entity'

import { ListTicketsWaitingForServiceQuery } from './list-tickets-waiting-for-service.query'

export type TicketsWaitingFor = {
  waitingFor: Guid
  tickets: Ticket[]
}

@QueryHandler(ListTicketsWaitingForServiceQuery)
export class ListTicketsWaitingForServiceQueryHandler
  implements
    IQueryHandler<ListTicketsWaitingForServiceQuery, TicketsWaitingFor[]>
{
  public constructor(
    private readonly ticketsReadableRepo: ITicketsReadableRepo
  ) {}

  public async execute({
    serviceIds,
    organizationId,
  }: ListTicketsWaitingForServiceQuery) {
    const today = DateTime.today().toJSDate()

    const tickets = await this.ticketsReadableRepo.find(
      new QueryBuilder<Ticket>()
        .equal('organizationId', organizationId)
        .in('serviceId', serviceIds)
        .in('status', Ticket.getToAttendStatus())
        .gte('createdAt', today)
        .getMany()
    )

    return serviceIds.map(serviceId => ({
      waitingFor: serviceId,
      tickets: tickets?.filter(
        ticket => ticket.toObject().serviceId === serviceId
      ),
    }))
  }
}
