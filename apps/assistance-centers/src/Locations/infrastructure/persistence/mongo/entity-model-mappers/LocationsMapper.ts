/* eslint-disable @typescript-eslint/naming-convention */
import { ILocationsMapper } from 'Locations/domain/contracts/ILocationsMapper'
import { Location } from 'Locations/domain/entities/Location'

import { ILocationDocument, LocationModel } from '../models/LocationModel'

export class LocationsMapper implements ILocationsMapper<ILocationDocument> {
  public toEntity(document: ILocationDocument): Location {
    const {
      _id,
      coordinates: { coordinates },
      ...attrs
    } = document.toObject<ILocationDocument>()

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

  public toModel(entity: Location): ILocationDocument {
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

  public toEntityList(documents: ILocationDocument[]): Location[] {
    return documents?.map(document => this.toEntity(document))
  }

  public toModelList(entities: Location[]): ILocationDocument[] {
    return entities?.map(entity => this.toModel(entity))
  }
}
