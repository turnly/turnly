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
  AnnounceTicketCommand,
  AnnounceTicketParams,
} from 'tickets/AnnounceTicket'
import { Ticket } from 'tickets/shared/domain/entities/Ticket'

import { AnnounceTicketValidator } from './AnnounceTicketValidator'

export class AnnounceTicketController extends Controller {
  public constructor(private readonly commandBus: ICommandBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(AnnounceTicketValidator)
  public async execute(params: AnnounceTicketParams) {
    const ticket = await this.commandBus.execute<Ticket, AnnounceTicketCommand>(
      new AnnounceTicketCommand(params)
    )

    return this.respond.ok(ticket.toObject())
  }
}
