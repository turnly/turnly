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
import { GetOneTicketQuery } from 'tickets/shared/application/queries'
import { Ticket } from 'tickets/shared/domain/entities/ticket.entity'

import { GetTicketDetailsValidator } from './get-ticket-details.validator'

export class GetTicketDetailsController extends Controller {
  public constructor(private readonly queryBus: IQueryBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(GetTicketDetailsValidator)
  public async execute(params: GetOneTicketQuery) {
    const ticket = await this.queryBus.ask<Nullable<Ticket>>(
      new GetOneTicketQuery(params.id, params.organizationId)
    )

    if (!ticket) throw new ResourceNotFoundException()

    return this.respond.ok(ticket.toObject())
  }
}