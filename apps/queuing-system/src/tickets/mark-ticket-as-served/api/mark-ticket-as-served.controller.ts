/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import {
  Controller,
  ICommandBus,
  InputValidator,
  TimeoutHandler,
} from '@turnly/shared'
import { MarkTicketAsServedCommand, MarkTicketAsServedParams } from 'tickets/mark-ticket-as-served'
import { Ticket } from 'tickets/shared/domain/entities/ticket.entity'

import { MarkTicketAsServedValidator } from './mark-ticket-as-served.validator'

export class MarkTicketAsServedController extends Controller {
  public constructor(private readonly commandBus: ICommandBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(MarkTicketAsServedValidator)
  public async execute(params: MarkTicketAsServedParams) {
    const ticket = await this.commandBus.execute<Ticket, MarkTicketAsServedCommand>(
      new MarkTicketAsServedCommand(params)
    )

    return this.respond.ok(ticket.toObject())
  }
}
