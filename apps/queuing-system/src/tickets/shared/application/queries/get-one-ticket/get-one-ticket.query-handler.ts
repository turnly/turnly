/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'
import { IQueryHandler, QueryBuilder, QueryHandler } from '@turnly/shared'
import { ITicketsReadableRepo } from 'tickets/shared/domain/contracts/tickets-repo.interface'
import { Ticket } from 'tickets/shared/domain/entities/ticket.entity'

import { GetOneTicketQuery } from './get-one-ticket.query'

@QueryHandler(GetOneTicketQuery)
export class GetOneTicketQueryHandler
  implements IQueryHandler<GetOneTicketQuery, Nullable<Ticket>>
{
  public constructor(
    private readonly ticketsReadableRepo: ITicketsReadableRepo
  ) {}

  public async execute({ id, organizationId }: GetOneTicketQuery) {
    const query = new QueryBuilder<Ticket>()
      .equal('id', id)
      .equal('organizationId', organizationId)
      .getOne()

    return await this.ticketsReadableRepo.getOne(query)
  }
}
