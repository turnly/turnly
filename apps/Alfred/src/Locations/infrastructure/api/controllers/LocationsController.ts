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
  public async get(params: LocationByIdQuery) {
    const location = await this.queryBus.ask<
      LocationByIdQuery,
      Nullable<Location>
    >(new LocationByIdQuery(params.id, params.companyId))

    if (!location) throw new ResourceNotFoundException()

    return this.respond.ok(location.toObject())
  }
}
