/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { MongoWritableRepo } from '@turnly/shared'
import { ILocationsMapper } from 'Locations/domain/contracts/ILocationsMapper'
import { ILocationsWritableRepo } from 'Locations/domain/contracts/ILocationsRepo'
import { Location } from 'Locations/domain/entities/Location'

import { ILocationDocument, LocationModel } from '../models/LocationModel'

export class LocationsWritableRepo
  extends MongoWritableRepo<Location, ILocationDocument>
  implements ILocationsWritableRepo
{
  public constructor(locationsMapper: ILocationsMapper<ILocationDocument>) {
    super(LocationModel, locationsMapper)
  }
}
