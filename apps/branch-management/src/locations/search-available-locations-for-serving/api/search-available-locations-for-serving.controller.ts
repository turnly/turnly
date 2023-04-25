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
import { SearchAvailableLocationsForServingQuery } from 'locations/search-available-locations-for-serving'
import { Location } from 'locations/shared/domain/entities/location.entity'

import { SearchAvailableLocationsForServingValidator } from './search-available-locations-for-serving.validator'

export class SearchAvailableLocationsForServingController extends Controller {
  public constructor(private readonly queryBus: IQueryBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(SearchAvailableLocationsForServingValidator)
  public async execute(params: SearchAvailableLocationsForServingQuery) {
    const locations = await this.queryBus.ask<Nullable<Location[]>>(
      SearchAvailableLocationsForServingQuery.build(params)
    )

    if (!locations?.length) throw new ResourceNotFoundException()

    return this.respond.ok(locations.map(location => location.toObject()))
  }
}
