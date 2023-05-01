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
import { Device } from 'devices/shared/domain/entities/device.entity'

import { PairToLocationCommand } from './pair-to-location.command'
import { PairToLocationValidator } from './pair-to-location.validator'

export class PairToLocationController extends Controller {
  public constructor(private readonly commandBus: ICommandBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(PairToLocationValidator)
  public async execute(params: PairToLocationCommand) {
    const device = await this.commandBus.execute<Device, PairToLocationCommand>(
      PairToLocationCommand.build(params)
    )

    return this.respond.ok(device.toObject())
  }
}
