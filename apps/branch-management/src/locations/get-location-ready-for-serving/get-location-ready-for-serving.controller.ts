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
import { Location } from 'locations/shared/domain/entities/location.entity'

import { GetLocationReadyForServingQuery } from './get-location-ready-for-serving.query'
import { GetLocationReadyForServingValidator } from './get-location-ready-for-serving.validator'

export class GetLocationReadyForServingController extends Controller {
  public constructor(private readonly queryBus: IQueryBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(GetLocationReadyForServingValidator)
  public async execute(params: GetLocationReadyForServingQuery) {
    const location = await this.queryBus.ask<Nullable<Location>>(
      GetLocationReadyForServingQuery.build(params)
    )

    if (!location) throw new ResourceNotFoundException()

    return this.respond.ok(location.toObject())
  }
}
