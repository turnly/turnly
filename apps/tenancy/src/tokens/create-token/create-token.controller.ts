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
import { Token } from 'tokens/shared/domain/entity/token.entity'

import { CreateTokenCommand } from './create-token.command'
import { CreateTokenValidator } from './create-token.validator'

export class CreateTokenController extends Controller {
  public constructor(private readonly commandBus: ICommandBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(CreateTokenValidator)
  public async execute(params: CreateTokenCommand) {
    const token = await this.commandBus.execute<Token, CreateTokenCommand>(
      CreateTokenCommand.build(params)
    )

    return this.respond.created(token.toObject())
  }
}
