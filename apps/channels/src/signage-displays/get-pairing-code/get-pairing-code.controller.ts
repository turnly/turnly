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
import { SignageDisplay } from 'signage-displays/shared/domain/entities/signage-display.entity'

import { GetPairingCodeCommand } from './get-pairing-code.command'
import { GetPairingCodeValidator } from './get-pairing-code.validator'

export class GetPairingCodeController extends Controller {
  public constructor(private readonly commandBus: ICommandBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(GetPairingCodeValidator)
  public async execute(params: GetPairingCodeCommand) {
    const { device } = await this.commandBus.execute<
      { signageDisplay: SignageDisplay; device: Device },
      GetPairingCodeCommand
    >(GetPairingCodeCommand.build(params))

    return this.respond.created(device.toObject())
  }
}
