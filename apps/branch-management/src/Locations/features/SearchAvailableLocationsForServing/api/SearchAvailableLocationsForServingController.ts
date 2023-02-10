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
import { Location } from 'Locations/domain/entities/Location'
import { SearchAvailableLocationsForServingQuery } from 'Locations/features/SearchAvailableLocationsForServing'

import { SearchAvailableLocationsForServingValidator } from './SearchAvailableLocationsForServingValidator'

export class SearchAvailableLocationsForServingController extends Controller {
  public constructor(private readonly queryBus: IQueryBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(SearchAvailableLocationsForServingValidator)
  public async execute(params: SearchAvailableLocationsForServingQuery) {
    const locations = await this.queryBus.ask<Nullable<Location[]>>(
      new SearchAvailableLocationsForServingQuery(
        params.organizationId,
        params.searchQuery,
        params.country,
        params.limit,
        params.offset,
        params.latitude,
        params.longitude
      )
    )

    if (!locations?.length) throw new ResourceNotFoundException()

    return this.respond.ok(locations.map(location => location.toObject()))
  }
}
