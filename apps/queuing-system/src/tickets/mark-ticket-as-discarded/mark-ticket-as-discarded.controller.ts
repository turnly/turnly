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
import { MarkTicketAsDiscardedCommand } from 'tickets/mark-ticket-as-discarded'
import { Ticket } from 'tickets/shared/domain/entities/ticket.entity'

import { MarkTicketAsDiscardedValidator } from './mark-ticket-as-discarded.validator'

export class MarkTicketAsDiscardedController extends Controller {
  public constructor(private readonly commandBus: ICommandBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(MarkTicketAsDiscardedValidator)
  public async execute(params: MarkTicketAsDiscardedCommand) {
    const ticket = await this.commandBus.execute<
      Ticket,
      MarkTicketAsDiscardedCommand
    >(MarkTicketAsDiscardedCommand.build(params))

    return this.respond.ok(ticket.toObject())
  }
}
