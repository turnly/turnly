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
    const signageDisplay = await this.commandBus.execute<
      SignageDisplay,
      GetPairingCodeCommand
    >(GetPairingCodeCommand.build(params))

    return this.respond.created(signageDisplay.toObject())
  }
}
