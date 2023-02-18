/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable, ResourceNotFoundException } from '@turnly/common'
import {
  Controller,
  InputValidator,
  IQueryBus,
  TimeoutHandler,
} from '@turnly/shared'
import { GetOneLocationQuery } from 'locations/get-one-location'
import { Location } from 'locations/shared/domain/entities/location.entity'

import { GetOneLocationValidator } from './get-one-location.validator'

export class GetOneLocationController extends Controller {
  public constructor(private readonly queryBus: IQueryBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(GetOneLocationValidator)
  public async execute(params: GetOneLocationQuery) {
    const location = await this.queryBus.ask<Nullable<Location>>(
      GetOneLocationQuery.build(params)
    )

    if (!location) throw new ResourceNotFoundException()

    return this.respond.ok(location.toObject())
  }
}
