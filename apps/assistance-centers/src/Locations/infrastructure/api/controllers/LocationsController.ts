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
import { FindLocationsQuery } from 'Locations/application/queries/FindLocationsQuery'
import { LocationByIdQuery } from 'Locations/application/queries/LocationByIdQuery'
import { Location } from 'Locations/domain/entities/Location'

import { validator } from '../validators/LocationsValidator'

export class LocationsController extends Controller {
  public constructor(private readonly queryBus: IQueryBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(validator.get)
  public async getOne(params: LocationByIdQuery) {
    const location = await this.queryBus.ask<Nullable<Location>>(
      new LocationByIdQuery(params.id, params.organizationId)
    )

    if (!location) throw new ResourceNotFoundException()

    return this.respond.ok(location.toObject())
  }

  @TimeoutHandler()
  @InputValidator(validator.find)
  public async find(params: FindLocationsQuery) {
    const locations = await this.queryBus.ask<Nullable<Location[]>>(
      new FindLocationsQuery(
        params.searchQuery,
        params.country,
        params.latitude,
        params.longitude,
        params.limit,
        params.offset,
        params.organizationId
      )
    )

    if (!locations?.length) throw new ResourceNotFoundException()

    return this.respond.ok(locations.map(location => location.toObject()))
  }
}
