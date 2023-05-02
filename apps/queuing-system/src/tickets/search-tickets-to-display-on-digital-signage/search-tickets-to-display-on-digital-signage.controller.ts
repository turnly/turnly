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
import {
  ResourceNotFoundException,
} from '@turnly/observability'
import {
  SearchTicketsToDisplayOnDigitalSignageQuery,
} from 'tickets/search-tickets-to-display-on-digital-signage'
import { Ticket } from 'tickets/shared/domain/entities/ticket.entity'

import { SearchTicketsToDisplayOnDigitalSignageValidator } from './search-tickets-to-display-on-digital-signage.validator'

export class SearchTicketsToDisplayOnDigitalSignageController extends Controller {
  public constructor(private readonly queryBus: IQueryBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(SearchTicketsToDisplayOnDigitalSignageValidator)
  public async execute(params: SearchTicketsToDisplayOnDigitalSignageQuery) {

    const tickets = await this.queryBus.ask<Nullable<Ticket[]>>(
      SearchTicketsToDisplayOnDigitalSignageQuery.build(params)
    )

    if (!tickets) throw new ResourceNotFoundException()

    return this.respond.ok(tickets.map(ticket => ticket.toObject()))
  }
}
