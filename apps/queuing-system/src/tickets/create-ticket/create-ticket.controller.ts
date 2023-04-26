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
} from '@turnly/core'
import { CreateTicketCommand } from 'tickets/create-ticket'
import { Ticket } from 'tickets/shared/domain/entities/ticket.entity'

import { CreateTicketValidator } from './create-ticket.validator'

export class CreateTicketController extends Controller {
  public constructor(private readonly commandBus: ICommandBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(CreateTicketValidator)
  public async execute(params: CreateTicketCommand) {
    const ticket = await this.commandBus.execute<Ticket, CreateTicketCommand>(
      CreateTicketCommand.build(params)
    )

    return this.respond.created(ticket.toObject())
  }
}
