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
import { CallTicketCommand, CallTicketParams } from 'tickets/CallTicket'
import { Ticket } from 'tickets/shared/domain/entities/Ticket'

import { CallTicketValidator } from './CallTicketValidator'

export class CallTicketController extends Controller {
  public constructor(private readonly commandBus: ICommandBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(CallTicketValidator)
  public async execute(params: CallTicketParams) {
    const ticket = await this.commandBus.execute<Ticket, CallTicketCommand>(
      new CallTicketCommand(params)
    )

    return this.respond.created(ticket.toObject())
  }
}
