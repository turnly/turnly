import { ResourceNotFoundException } from '@turnly/common'
import {
  Controller,
  InputValidator,
  IQueryBus,
  TimeoutHandler,
} from '@turnly/shared'
import { LocationByIdQuery } from 'Locations/application/queries'
import { GetLocationPayload } from 'Locations/domain/payloads'

import { validator } from '../validators/LocationValidator'

export class LocationsController extends Controller {
  public constructor(private readonly queryBus: IQueryBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(validator.get)
  public async get(params: GetLocationPayload) {
    const location = await this.queryBus.ask(new LocationByIdQuery(params))

    if (!location) throw new ResourceNotFoundException()

    return this.respond.ok(location.toObject())
  }
}
