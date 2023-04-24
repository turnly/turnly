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
  ReturnTicketToQueueCommand,
  ReturnTicketToQueueParams,
} from 'tickets/return-ticket-to-queue'
import { Ticket } from 'tickets/shared/domain/entities/Ticket'

import { ReturnTicketToQueueValidator } from './return-ticket-to-queue.validator'

export class ReturnTicketToQueueController extends Controller {
  public constructor(private readonly commandBus: ICommandBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(ReturnTicketToQueueValidator)
  public async execute(params: ReturnTicketToQueueParams) {
    const ticket = await this.commandBus.execute<Ticket, ReturnTicketToQueueCommand>(
      new ReturnTicketToQueueCommand(params)
    )

    return this.respond.ok(ticket.toObject())
  }
}
