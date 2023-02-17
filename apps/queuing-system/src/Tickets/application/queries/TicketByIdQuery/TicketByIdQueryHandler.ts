/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'
import { IQueryHandler, QueryBuilder, QueryHandler } from '@turnly/shared'
import { ITicketsReadableRepo } from 'Tickets/Shared/domain/contracts/ITicketsRepo'
import { Ticket } from 'Tickets/domain/entities/Ticket'

import { TicketByIdQuery } from './TicketByIdQuery'

@QueryHandler(TicketByIdQuery)
export class TicketByIdQueryHandler
  implements IQueryHandler<TicketByIdQuery, Nullable<Ticket>>
{
  public constructor(
    private readonly ticketsReadableRepo: ITicketsReadableRepo
  ) {}

  public async execute({ id, organizationId }: TicketByIdQuery) {
    const query = new QueryBuilder<Ticket>()
      .equal('id', id)
      .equal('organizationId', organizationId)
      .getOne()

    return await this.ticketsReadableRepo.getOne(query)
  }
}
