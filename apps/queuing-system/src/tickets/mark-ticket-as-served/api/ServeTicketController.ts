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
import { ServeTicketCommand, ServeTicketParams } from 'tickets/mark-ticket-as-served'
import { Ticket } from 'tickets/shared/domain/entities/Ticket'

import { ServeTicketValidator } from './ServeTicketValidator'

export class ServeTicketController extends Controller {
  public constructor(private readonly commandBus: ICommandBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(ServeTicketValidator)
  public async execute(params: ServeTicketParams) {
    const ticket = await this.commandBus.execute<Ticket, ServeTicketCommand>(
      new ServeTicketCommand(params)
    )

    return this.respond.ok(ticket.toObject())
  }
}
