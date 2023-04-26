/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { MongoReadableRepo } from '@turnly/core'
import { ILocationsMapper } from 'locations/shared/domain/contracts/locations-mapper.interface'
import { ILocationsReadableRepo } from 'locations/shared/domain/contracts/locations-repo.interface'
import { Location } from 'locations/shared/domain/entities/location.entity'

import { ILocationDocument, LocationModel } from './location.model'

export class LocationsReadableRepo
  extends MongoReadableRepo<Location, ILocationDocument>
  implements ILocationsReadableRepo
{
  public constructor(locationsMapper: ILocationsMapper<ILocationDocument>) {
    super(LocationModel, locationsMapper)
  }
}
