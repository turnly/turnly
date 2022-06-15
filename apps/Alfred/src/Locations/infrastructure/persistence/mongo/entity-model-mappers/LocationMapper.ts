/* eslint-disable @typescript-eslint/naming-convention */
import { ILocationsMapper } from 'Locations/domain/contracts/ILocationsMapper'
import { Location } from 'Locations/domain/entities/Location'

import { LocationDocument, LocationModel } from '../models/LocationModel'

export class LocationMapper implements ILocationsMapper<LocationDocument> {
  public toEntity(document: LocationDocument): Location {
    const {
      _id,
      coordinates: { coordinates },
      ...attrs
    } = document.toObject<LocationDocument>()

    const [lng, lat] = coordinates

    return Location.build({
      ...attrs,
      id: String(_id),
      coordinates: {
        lng,
        lat,
      },
    })
  }

  public toModel(entity: Location): LocationDocument {
    const { id: _id, coordinates, ...attrs } = entity.toObject()

    return new LocationModel({
      ...attrs,
      _id,
      coordinates: {
        type: 'Point',
        coordinates: [coordinates.lng, coordinates.lat],
      },
    })
  }

  public toEntityList(documents: LocationDocument[]): Location[] {
    return documents?.map(document => this.toEntity(document))
  }

  public toModelList(entities: Location[]): LocationDocument[] {
    return entities?.map(entity => this.toModel(entity))
  }
}
