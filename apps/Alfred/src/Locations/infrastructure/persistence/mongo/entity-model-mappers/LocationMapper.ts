/* eslint-disable @typescript-eslint/naming-convention */
import { EntityAttributes } from '@turnly/shared'
import { ILocationsMapper } from 'Locations/domain/contracts/ILocationsMapper'
import { Location } from 'Locations/domain/entities/Location'

import { LocationDocument, LocationModel } from '../models/LocationModel'

export class LocationMapper implements ILocationsMapper<LocationDocument> {
  public toEntity(document: LocationDocument): Location {
    const { _id, ...attrs } = document.toObject<EntityAttributes<Location>>()

    return Location.build({ ...attrs, id: String(_id) })
  }

  public toModel(entity: Location): LocationDocument {
    const { id: _id, ...attrs } = entity.toObject()

    return new LocationModel({ ...attrs, _id })
  }

  public toEntityList(documents: LocationDocument[]): Location[] {
    return documents?.map(document => this.toEntity(document))
  }

  public toModelList(entities: Location[]): LocationDocument[] {
    return entities?.map(entity => this.toModel(entity))
  }
}
