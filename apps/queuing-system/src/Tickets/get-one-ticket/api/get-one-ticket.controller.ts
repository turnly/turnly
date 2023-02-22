/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable, ResourceNotFoundException } from '@turnly/common'
import {
  Controller,
  InputValidator,
  IQueryBus,
  TimeoutHandler,
} from '@turnly/shared'
import { GetOneTicketQuery } from 'Tickets/Shared/application/queries'
import { Ticket } from 'Tickets/Shared/domain/entities/Ticket'

import { GetOneTicketValidator } from './get-one-ticket.validator'

export class GetOneTicketController extends Controller {
  public constructor(private readonly queryBus: IQueryBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(GetOneTicketValidator)
  public async execute(params: GetOneTicketQuery & { customerId: string }) {
    const ticket = await this.queryBus.ask<Nullable<Ticket>>(
      new GetOneTicketQuery(params.id, params.organizationId)
    )

    if (!ticket || !ticket.isOwnedBy(params.customerId))
      throw new ResourceNotFoundException()

    return this.respond.ok(ticket.toObject())
  }
}
