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
import { ITicketsReadableRepo } from 'Tickets/Shared/domain/contracts/ITicketsRepo'
import { Ticket } from 'Tickets/Shared/domain/entities/Ticket'

import { GetTicketsWaitingForServiceQuery } from './get-tickets-waiting-for-service.query'

export type TicketsWaitingFor = {
  waitingFor: Guid
  tickets: Ticket[]
}

@QueryHandler(GetTicketsWaitingForServiceQuery)
export class GetTicketsWaitingForServiceQueryHandler
  implements
    IQueryHandler<GetTicketsWaitingForServiceQuery, TicketsWaitingFor[]>
{
  public constructor(
    private readonly ticketsReadableRepo: ITicketsReadableRepo
  ) {}

  public async execute({
    serviceIds,
    organizationId,
  }: GetTicketsWaitingForServiceQuery) {
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
