/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { MongoWritableRepo } from '@turnly/core'
import { ILocationsMapper } from 'locations/shared/domain/contracts/locations-mapper.interface'
import { ILocationsWritableRepo } from 'locations/shared/domain/contracts/locations-repo.interface'
import { Location } from 'locations/shared/domain/entities/location.entity'

import { ILocationDocument, LocationModel } from '../models/location.model'

export class LocationsWritableRepo
  extends MongoWritableRepo<Location, ILocationDocument>
  implements ILocationsWritableRepo
{
  public constructor(locationsMapper: ILocationsMapper<ILocationDocument>) {
    super(LocationModel, locationsMapper)
  }
}
