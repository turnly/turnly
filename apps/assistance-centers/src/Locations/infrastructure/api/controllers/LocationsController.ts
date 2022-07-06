/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { Nullable, ResourceNotFoundException } from '@turnly/common'
import {
  Controller,
  InputValidator,
  IQueryBus,
  TimeoutHandler,
} from '@turnly/shared'
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
}
