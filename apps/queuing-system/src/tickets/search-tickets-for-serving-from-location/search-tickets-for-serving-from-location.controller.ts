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
  BadRequestException,
  ResourceNotFoundException,
} from '@turnly/observability'
import {
  SearchTicketsForServingFromLocationFilters,
  SearchTicketsForServingFromLocationParams,
  SearchTicketsForServingFromLocationQuery,
} from 'tickets/search-tickets-for-serving-from-location'
import { Ticket } from 'tickets/shared/domain/entities/ticket.entity'
import { TicketStatus } from 'tickets/shared/domain/enums/TicketStatus'

import { SearchTicketsForServingFromLocationValidator } from './search-tickets-for-serving-from-location.validator'

export class SearchTicketsForServingFromLocationController extends Controller {
  public constructor(private readonly queryBus: IQueryBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(SearchTicketsForServingFromLocationValidator)
  public async execute(params: SearchTicketsForServingFromLocationParams) {
    const statuses = {
      [SearchTicketsForServingFromLocationFilters.WAITING]: [
        TicketStatus.ANNOUNCED,
        TicketStatus.RETURNED,
        TicketStatus.CALLED,
        TicketStatus.RECALLED,
      ],
      [SearchTicketsForServingFromLocationFilters.DISCARDED]: [
        TicketStatus.DISCARDED,
      ],
    }

    const status =
      statuses[
        params.status ?? SearchTicketsForServingFromLocationFilters.WAITING
      ]
    if (!status)
      throw new BadRequestException(
        'Oops! seems that this status is not valid.'
      )

    const tickets = await this.queryBus.ask<Nullable<Ticket[]>>(
      SearchTicketsForServingFromLocationQuery.build({
        ...params,
        status,
      })
    )

    if (!tickets) throw new ResourceNotFoundException()

    return this.respond.ok(tickets.map(ticket => ticket.toObject()))
  }
}
