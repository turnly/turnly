/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import {
  DateTime,
  IQueryHandler,
  QueryBuilder,
  QueryHandler,
} from '@turnly/shared'
import { ITicketsReadableRepo } from 'Tickets/domain/contracts/ITicketsRepo'
import { Ticket } from 'Tickets/domain/entities/Ticket'

import { TicketsWaitingForServiceQuery } from './TicketsWaitingForServiceQuery'

export type TicketsWaitingFor = {
  waitingFor: Guid
  tickets: Ticket[]
}

@QueryHandler(TicketsWaitingForServiceQuery)
export class TicketsWaitingForServiceQueryHandler
  implements IQueryHandler<TicketsWaitingForServiceQuery, TicketsWaitingFor[]>
{
  public constructor(
    private readonly ticketsReadableRepo: ITicketsReadableRepo
  ) {}

  public async execute({
    serviceIds,
    organizationId,
  }: TicketsWaitingForServiceQuery) {
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
