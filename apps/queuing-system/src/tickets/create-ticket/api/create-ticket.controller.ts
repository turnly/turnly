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
  CreateTicketCommand,
  CreateTicketCommandParams,
} from 'tickets/create-ticket'
import { Ticket } from 'tickets/shared/domain/entities/ticket.entity'

import { CreateTicketValidator } from './create-ticket.validator'

export class CreateTicketController extends Controller {
  public constructor(private readonly commandBus: ICommandBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(CreateTicketValidator)
  public async execute(params: CreateTicketCommandParams) {
    const ticket = await this.commandBus.execute<Ticket, CreateTicketCommand>(
      new CreateTicketCommand(params)
    )

    return this.respond.created(ticket.toObject())
  }
}
