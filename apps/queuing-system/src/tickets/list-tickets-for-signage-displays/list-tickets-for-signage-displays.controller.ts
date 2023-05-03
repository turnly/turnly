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
import { ListTicketsForSignageDisplaysQuery } from 'tickets/list-tickets-for-signage-displays'
import { Ticket } from 'tickets/shared/domain/entities/ticket.entity'

import { ListTicketsForSignageDisplaysValidator } from './list-tickets-for-signage-displays.validator'

export class ListTicketsForSignageDisplaysController extends Controller {
  public constructor(private readonly queryBus: IQueryBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(ListTicketsForSignageDisplaysValidator)
  public async execute(params: ListTicketsForSignageDisplaysQuery) {
    const tickets = await this.queryBus.ask<Nullable<Ticket[]>>(
      ListTicketsForSignageDisplaysQuery.build(params)
    )

    if (!tickets) throw new ResourceNotFoundException()

    return this.respond.ok(tickets.map(ticket => ticket.toObject()))
  }
}
