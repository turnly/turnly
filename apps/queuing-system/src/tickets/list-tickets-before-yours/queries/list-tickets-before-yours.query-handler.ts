/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ResourceNotFoundException } from '@turnly/observability'
import {
  DateTime,
  IQueryHandler,
  QueryBuilder,
  QueryHandler,
} from '@turnly/shared'
import { ITicketsReadableRepo } from 'tickets/shared/domain/contracts/tickets-repo.interface'
import { Ticket } from 'tickets/shared/domain/entities/ticket.entity'

import { ListTicketsBeforeYoursQuery } from './list-tickets-before-yours.query'

@QueryHandler(ListTicketsBeforeYoursQuery)
export class ListTicketsBeforeYoursQueryHandler
  implements IQueryHandler<ListTicketsBeforeYoursQuery, Ticket[]>
{
  public constructor(
    private readonly ticketsReadableRepo: ITicketsReadableRepo
  ) {}

  public async execute({
    ticketId,
    customerId,
    organizationId,
  }: ListTicketsBeforeYoursQuery) {
    const today = DateTime.today().toJSDate()

    const ticket = await this.ticketsReadableRepo.getOne(
      new QueryBuilder<Ticket>()
        .equal('id', ticketId)
        .equal('customerId', customerId)
        .equal('organizationId', organizationId)
        .in('status', Ticket.getToAttendStatus())
        .gte('createdAt', today)
        .getOne()
    )

    if (!ticket) throw new ResourceNotFoundException()

    const { createdAt, serviceId } = ticket.toObject()

    return await this.ticketsReadableRepo.find(
      new QueryBuilder<Ticket>()
        .equal('organizationId', organizationId)
        .equal('serviceId', serviceId)
        .notEqual('id', ticketId)
        .in('status', Ticket.getToAttendStatus())
        .gte('createdAt', today)
        .lte('createdAt', createdAt)
        .orderByOldest('createdAt')
        .getMany()
    )
  }
}
