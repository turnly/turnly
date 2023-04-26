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
import { ReturnTicketToQueueCommand } from 'tickets/return-ticket-to-queue'
import { Ticket } from 'tickets/shared/domain/entities/ticket.entity'

import { ReturnTicketToQueueValidator } from './return-ticket-to-queue.validator'

export class ReturnTicketToQueueController extends Controller {
  public constructor(private readonly commandBus: ICommandBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(ReturnTicketToQueueValidator)
  public async execute(params: ReturnTicketToQueueCommand) {
    const ticket = await this.commandBus.execute<
      Ticket,
      ReturnTicketToQueueCommand
    >(ReturnTicketToQueueCommand.build(params))

    return this.respond.ok(ticket.toObject())
  }
}
