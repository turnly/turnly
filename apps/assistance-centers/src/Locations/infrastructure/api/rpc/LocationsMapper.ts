/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'
import { Producers } from '@turnly/rpc'
import { EntityAttributes } from '@turnly/shared'
import { Location } from 'Locations/domain/entities/Location'

export class LocationsMapper {
  public static toRPC(
    entity: Nullable<EntityAttributes<Location>> | undefined
  ): Producers.AssistanceCenters.Location {
    const location = new Producers.AssistanceCenters.Location()

    if (entity) {
      location.setId(entity.id)
      location.setName(entity.name)
      location.setAddress(entity.address)
      location.setCountry(entity.country)
      location.setLatitude(entity.coordinates.lat)
      location.setLongitude(entity.coordinates.lng)
      location.setStopServingBeforeInMinutes(entity.stopServingBeforeInMinutes)
    }

    return location
  }
}
