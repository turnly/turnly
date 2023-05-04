/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */

import {
  Controller,
  InputValidator,
  IQueryBus,
  TimeoutHandler,
} from '@turnly/core'
import { Token } from 'tokens/shared/domain/entity/token.entity'

import { GetOneTokenQuery } from './get-one-token.query'
import { GetOneTokenValidator } from './get-one-token.validator'

export class GetOneTokenController extends Controller {
  public constructor(private readonly queryBus: IQueryBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(GetOneTokenValidator)
  public async execute(params: GetOneTokenQuery) {
    const token = await this.queryBus.ask<Token>(GetOneTokenQuery.build(params))

    return this.respond.ok({ ...token.toObject(), secret: undefined })
  }
}
