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
import { LeaveTicketCommand, LeaveTicketParams } from 'Tickets/LeaveTicket'
import { Ticket } from 'Tickets/Shared/domain/entities/Ticket'

import { LeaveTicketValidator } from './LeaveTicketValidator'

export class LeaveTicketController extends Controller {
  public constructor(private readonly commandBus: ICommandBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(LeaveTicketValidator)
  public async execute(params: LeaveTicketParams) {
    const ticket = await this.commandBus.execute<Ticket, LeaveTicketCommand>(
      new LeaveTicketCommand(params)
    )

    return this.respond.ok(ticket.toObject())
  }
}
