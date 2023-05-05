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

import { GeneratePairingCodeCommand } from './generate-pairing-code.command'
import { GeneratePairingCodeValidator } from './generate-pairing-code.validator'

export class GeneratePairingCodeController extends Controller {
  public constructor(private readonly commandBus: ICommandBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(GeneratePairingCodeValidator)
  public async execute(params: GeneratePairingCodeCommand) {
    const device = await this.commandBus.execute<
      Device,
      GeneratePairingCodeCommand
    >(GeneratePairingCodeCommand.build(params))

    return this.respond.created(device.toObject())
  }
}
