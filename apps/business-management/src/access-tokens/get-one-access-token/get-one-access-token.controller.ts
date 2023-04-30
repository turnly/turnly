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
import { AccessToken } from 'access-tokens/shared/domain/entity/access-token.entity'

import { GetOneAccessTokenQuery } from './get-one-access-token.query'
import { GetOneAccessTokenValidator } from './get-one-access-token.validator'

export class GetOneAccessTokenController extends Controller {
  public constructor(private readonly queryBus: IQueryBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(GetOneAccessTokenValidator)
  public async execute(params: GetOneAccessTokenQuery) {
    const accessToken = await this.queryBus.ask<AccessToken>(
      GetOneAccessTokenQuery.build(params)
    )

    return this.respond.ok(accessToken.toObject())
  }
}
