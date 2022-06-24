import { MongoReadableRepo } from '@turnly/shared'
import { ILocationsMapper } from 'Locations/domain/contracts/ILocationsMapper'
import { ILocationsReadableRepo } from 'Locations/domain/contracts/ILocationsRepo'
import { Location } from 'Locations/domain/entities/Location'

import { ILocationDocument, LocationModel } from '../models/LocationModel'

export class LocationsReadableRepo
  extends MongoReadableRepo<Location, ILocationDocument>
  implements ILocationsReadableRepo
{
  public constructor(locationsMapper: ILocationsMapper<ILocationDocument>) {
    super(LocationModel, locationsMapper)
  }
}
