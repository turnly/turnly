import { MongoWritableRepo } from '@turnly/shared'
import { ILocationsMapper } from 'Locations/domain/contracts/ILocationsMapper'
import { ILocationWritableRepo } from 'Locations/domain/contracts/ILocationsRepo'
import { Location } from 'Locations/domain/entities/Location'

import { LocationDocument, LocationModel } from '../models/LocationModel'

export class LocationsWritableRepo
  extends MongoWritableRepo<Location, LocationDocument>
  implements ILocationWritableRepo
{
  public constructor(locationsMapper: ILocationsMapper<LocationDocument>) {
    super(LocationModel, locationsMapper)
  }
}
