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

import { UpdateSignageDisplayCommand } from './update-signage-display.command'
import { UpdateSignageDisplayValidator } from './update-signage-display.validator'

export class UpdateSignageDisplayController extends Controller {
  public constructor(private readonly commandBus: ICommandBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(UpdateSignageDisplayValidator)
  public async execute(params: UpdateSignageDisplayCommand) {
    const signageDisplay = await this.commandBus.execute<
      SignageDisplay,
      UpdateSignageDisplayCommand
    >(UpdateSignageDisplayCommand.build(params))

    return this.respond.created(signageDisplay.toObject())
  }
}
