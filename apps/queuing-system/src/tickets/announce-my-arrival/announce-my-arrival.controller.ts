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
import { AnnounceMyArrivalCommand } from 'tickets/announce-my-arrival'
import { Ticket } from 'tickets/shared/domain/entities/ticket.entity'

import { AnnounceMyArrivalValidator } from './announce-my-arrival.validator'

export class AnnounceMyArrivalController extends Controller {
  public constructor(private readonly commandBus: ICommandBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(AnnounceMyArrivalValidator)
  public async execute(params: AnnounceMyArrivalCommand) {
    const ticket = await this.commandBus.execute<
      Ticket,
      AnnounceMyArrivalCommand
    >(AnnounceMyArrivalCommand.build(params))

    return this.respond.ok(ticket.toObject())
  }
}
