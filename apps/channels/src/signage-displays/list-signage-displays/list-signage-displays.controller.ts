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

import { ListSignageDisplaysQuery } from './list-signage-displays.query'
import { ListSignageDisplaysValidator } from './list-signage-displays.validator'

export class ListSignageDisplaysController extends Controller {
  public constructor(private readonly queryBus: IQueryBus) {
    super()
  }
  @TimeoutHandler()
  @InputValidator(ListSignageDisplaysValidator)
  public async execute(params: ListSignageDisplaysQuery) {
    const signageDisplays = await this.queryBus.ask<Nullable<SignageDisplay[]>>(
      ListSignageDisplaysQuery.build(params)
    )

    if (!signageDisplays?.length) throw new ResourceNotFoundException()

    return this.respond.ok(
      signageDisplays.map(signageDisplay => signageDisplay.toObject())
    )
  }
}
