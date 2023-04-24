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
import { LeaveTheQueueCommand, LeaveTheQueueParams } from 'tickets/leave-the-queue'
import { Ticket } from 'tickets/shared/domain/entities/Ticket'

import { LeaveTheQueueValidator } from './leave-the-queue.validator'

export class LeaveTheQueueController extends Controller {
  public constructor(private readonly commandBus: ICommandBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(LeaveTheQueueValidator)
  public async execute(params: LeaveTheQueueParams) {
    const ticket = await this.commandBus.execute<Ticket, LeaveTheQueueCommand>(
      new LeaveTheQueueCommand(params)
    )

    return this.respond.ok(ticket.toObject())
  }
}
