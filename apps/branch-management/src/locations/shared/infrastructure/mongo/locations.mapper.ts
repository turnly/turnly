/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ILocationsMapper } from 'locations/shared/domain/contracts/locations-mapper.interface'
import { Location } from 'locations/shared/domain/entities/location.entity'
import { OpeningHoursMapper } from 'opening-hours/shared/infrastructure/mongo/opening-hours.mapper'

import { ILocationDocument, LocationModel } from './location.model'

export class LocationsMapper implements ILocationsMapper<ILocationDocument> {
  public constructor(private readonly openingHoursMapper: OpeningHoursMapper) {}

  public toEntity(document: ILocationDocument): Location {
    const {
      _id,
      coordinates: { coordinates },
      openingHours,
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
      openingHours: this.openingHoursMapper.toEntityList(openingHours),
    })
  }

  public toModel(entity: Location): ILocationDocument {
    const { id: _id, coordinates, openingHours, ...attrs } = entity.toObject()

    return new LocationModel({
      ...attrs,
      _id,
      coordinates: {
        type: 'Point',
        coordinates: [coordinates.lng, coordinates.lat],
      },
      openingHours: this.openingHoursMapper.toModelList(openingHours),
    })
  }

  public toEntityList(documents: ILocationDocument[]): Location[] {
    return documents?.map(document => this.toEntity(document))
  }

  public toModelList(entities: Location[]): ILocationDocument[] {
    return entities?.map(entity => this.toModel(entity))
  }
}
