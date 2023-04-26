/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import {
  Controller,
  InputValidator,
  IQueryBus,
  TimeoutHandler,
} from '@turnly/core'
import { ResourceNotFoundException } from '@turnly/observability'
import {
  ListTicketsWaitingForServiceQuery,
  TicketsWaitingFor,
} from 'tickets/list-tickets-waiting-for-service'

import { ListTicketsWaitingForServiceValidator } from './list-tickets-waiting-for-service.validator'

export class ListTicketsWaitingForServiceController extends Controller {
  public constructor(private readonly queryBus: IQueryBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(ListTicketsWaitingForServiceValidator)
  public async execute(params: ListTicketsWaitingForServiceQuery) {
    const tickets = await this.queryBus.ask<TicketsWaitingFor[]>(
      ListTicketsWaitingForServiceQuery.build(params)
    )

    if (!tickets) throw new ResourceNotFoundException()

    return this.respond.ok(
      tickets.map(({ waitingFor, tickets }) => ({
        waitingFor,
        tickets: tickets.map(ticket => ticket.toObject()),
      }))
    )
  }
}
