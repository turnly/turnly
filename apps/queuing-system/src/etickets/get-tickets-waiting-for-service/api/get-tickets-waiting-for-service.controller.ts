/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ResourceNotFoundException } from '@turnly/common'
import {
  Controller,
  InputValidator,
  IQueryBus,
  TimeoutHandler,
} from '@turnly/shared'
import {
  GetTicketsWaitingForServiceQuery,
  TicketsWaitingFor,
} from 'etickets/get-tickets-waiting-for-service'

import { GetTicketsWaitingForServiceValidator } from './get-tickets-waiting-for-service.validator'

export class GetTicketsWaitingForServiceController extends Controller {
  public constructor(private readonly queryBus: IQueryBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(GetTicketsWaitingForServiceValidator)
  public async execute(params: GetTicketsWaitingForServiceQuery) {
    const tickets = await this.queryBus.ask<TicketsWaitingFor[]>(
      new GetTicketsWaitingForServiceQuery(
        params.serviceIds,
        params.organizationId
      )
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
