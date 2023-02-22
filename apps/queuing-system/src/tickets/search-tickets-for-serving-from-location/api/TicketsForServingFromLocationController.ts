/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import {
  BadRequestException,
  Nullable,
  ResourceNotFoundException,
} from '@turnly/common'
import {
  Controller,
  InputValidator,
  IQueryBus,
  TimeoutHandler,
} from '@turnly/shared'
import {
  TicketsByLocationFilters,
  TicketsByLocationParams,
  TicketsForServingFromLocationQuery,
} from 'tickets/search-tickets-for-serving-from-location'
import { Ticket } from 'tickets/shared/domain/entities/Ticket'
import { TicketStatus } from 'tickets/shared/domain/enums/TicketStatus'

import { TicketsForServingFromLocationValidator } from './TicketsForServingFromLocationValidator'

export class TicketsForServingFromLocationController extends Controller {
  public constructor(private readonly queryBus: IQueryBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(TicketsForServingFromLocationValidator)
  public async execute(params: TicketsByLocationParams) {
    const statuses = {
      [TicketsByLocationFilters.WAITING]: [
        TicketStatus.ANNOUNCED,
        TicketStatus.RETURNED,
        TicketStatus.CALLED,
        TicketStatus.RECALLED,
      ],
      [TicketsByLocationFilters.DISCARDED]: [TicketStatus.DISCARDED],
    }

    const status = statuses[params.status ?? TicketsByLocationFilters.WAITING]
    if (!status)
      throw new BadRequestException(
        'Oops! seems that this status is not valid.'
      )

    const tickets = await this.queryBus.ask<Nullable<Ticket[]>>(
      new TicketsForServingFromLocationQuery(
        params.locationId,
        params.organizationId,
        status,
        params.searchQuery,
        params.serviceIds
      )
    )

    if (!tickets) throw new ResourceNotFoundException()

    return this.respond.ok(tickets.map(ticket => ticket.toObject()))
  }
}
