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
import {
  DiscardTicketCommand,
  DiscardTicketParams,
} from 'tickets/DiscardTicket'
import { Ticket } from 'tickets/shared/domain/entities/Ticket'

import { DiscardTicketValidator } from './DiscardTicketValidator'

export class DiscardTicketController extends Controller {
  public constructor(private readonly commandBus: ICommandBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(DiscardTicketValidator)
  public async execute(params: DiscardTicketParams) {
    const ticket = await this.commandBus.execute<Ticket, DiscardTicketCommand>(
      new DiscardTicketCommand(params)
    )

    return this.respond.ok(ticket.toObject())
  }
}
