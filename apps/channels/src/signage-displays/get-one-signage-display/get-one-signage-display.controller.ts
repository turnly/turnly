/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'
import {
  Controller,
  InputValidator,
  IQueryBus,
  TimeoutHandler,
} from '@turnly/core'
import { ResourceNotFoundException } from '@turnly/observability'
import { SignageDisplay } from 'signage-displays/shared/domain/entities/signage-display.entity'

import { GetOneSignageDisplayQuery } from './get-one-signage-display.query'
import { GetOneSignageDisplayValidator } from './get-one-signage-display.validator'

export class GetOneSignageDisplayController extends Controller {
  public constructor(private readonly queryBus: IQueryBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(GetOneSignageDisplayValidator)
  public async execute(params: GetOneSignageDisplayQuery) {
    const signageDisplay = await this.queryBus.ask<Nullable<SignageDisplay>>(
      GetOneSignageDisplayQuery.build(params)
    )

    if (!signageDisplay) throw new ResourceNotFoundException()

    return this.respond.ok(signageDisplay.toObject())
  }
}
