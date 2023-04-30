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
import { AccessToken } from 'access-tokens/shared/domain/entity/access-token.entity'

import { CreateAccessTokenCommand } from './create-access-token.command'
import { CreateAccessTokenValidator } from './create-access-token.validator'

export class CreateAccessTokenController extends Controller {
  public constructor(private readonly commandBus: ICommandBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(CreateAccessTokenValidator)
  public async execute(params: CreateAccessTokenCommand) {
    const token = await this.commandBus.execute<
      AccessToken,
      CreateAccessTokenCommand
    >(CreateAccessTokenCommand.build(params))

    return this.respond.created(token.toObject())
  }
}
