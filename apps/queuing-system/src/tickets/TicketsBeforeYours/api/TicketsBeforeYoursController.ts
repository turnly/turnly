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
import { Ticket } from 'tickets/shared/domain/entities/Ticket'
import { TicketsBeforeYoursQuery } from 'tickets/TicketsBeforeYours'

import { TicketsBeforeYoursValidator } from './TicketsBeforeYoursValidator'

export class TicketsBeforeYoursController extends Controller {
  public constructor(private readonly queryBus: IQueryBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(TicketsBeforeYoursValidator)
  public async execute(params: TicketsBeforeYoursQuery) {
    const tickets = await this.queryBus.ask<Nullable<Ticket[]>>(
      new TicketsBeforeYoursQuery(
        params.ticketId,
        params.customerId,
        params.organizationId
      )
    )

    if (!tickets) throw new ResourceNotFoundException()

    return this.respond.ok(tickets.map(ticket => ticket.toObject()))
  }
}
