/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ILocationsMapper } from 'Locations/Shared/domain/contracts/ILocationsMapper'
import { Location } from 'Locations/Shared/domain/entities/Location'

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
