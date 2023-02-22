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
  ReturnToQueueCommand,
  ReturnToQueueParams,
} from 'tickets/return-ticket-to-queue'
import { Ticket } from 'tickets/shared/domain/entities/Ticket'

import { ReturnToQueueValidator } from './ReturnToQueueValidator'

export class ReturnToQueueController extends Controller {
  public constructor(private readonly commandBus: ICommandBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(ReturnToQueueValidator)
  public async execute(params: ReturnToQueueParams) {
    const ticket = await this.commandBus.execute<Ticket, ReturnToQueueCommand>(
      new ReturnToQueueCommand(params)
    )

    return this.respond.ok(ticket.toObject())
  }
}
