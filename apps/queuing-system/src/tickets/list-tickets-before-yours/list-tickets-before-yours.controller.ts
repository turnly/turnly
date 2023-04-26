/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'
import {
  Controller,
  InputValidator,
  IQueryBus,
  TimeoutHandler,
} from '@turnly/core'
import { ResourceNotFoundException } from '@turnly/observability'
import { ListTicketsBeforeYoursQuery } from 'tickets/list-tickets-before-yours'
import { Ticket } from 'tickets/shared/domain/entities/ticket.entity'

import { ListTicketsBeforeYoursValidator } from './list-tickets-before-yours.validator'

export class ListTicketsBeforeYoursController extends Controller {
  public constructor(private readonly queryBus: IQueryBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(ListTicketsBeforeYoursValidator)
  public async execute(params: ListTicketsBeforeYoursQuery) {
    const tickets = await this.queryBus.ask<Nullable<Ticket[]>>(
      ListTicketsBeforeYoursQuery.build(params)
    )

    if (!tickets) throw new ResourceNotFoundException()

    return this.respond.ok(tickets.map(ticket => ticket.toObject()))
  }
}
