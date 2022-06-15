import { MongoReadableRepo } from '@turnly/shared'
import { ILocationsMapper } from 'Locations/domain/contracts/ILocationsMapper'
import { ILocationReadableRepo } from 'Locations/domain/contracts/ILocationsRepo'
import { Location } from 'Locations/domain/entities/Location'

import { LocationDocument, LocationModel } from '../models/LocationModel'

export class LocationReadableRepo
  extends MongoReadableRepo<Location, LocationDocument>
  implements ILocationReadableRepo
{
  public constructor(locationsMapper: ILocationsMapper<LocationDocument>) {
    super(LocationModel, locationsMapper)
  }
}
