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
import { ITicketsReadableRepo } from 'Tickets/Shared/domain/contracts/ITicketsRepo'
import { Ticket } from 'Tickets/Shared/domain/entities/Ticket'

import { TicketsForServingFromLocationQuery } from './TicketsForServingFromLocationQuery'

@QueryHandler(TicketsForServingFromLocationQuery)
export class TicketsForServingFromLocationQueryHandler
  implements IQueryHandler<TicketsForServingFromLocationQuery>
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
  }: TicketsForServingFromLocationQuery) {
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
