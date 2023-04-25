/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'
import { Producers } from '@turnly/grpc'
import { EntityAttributes } from '@turnly/core'
import { Location } from 'locations/shared/domain/entities/location.entity'

export class LocationsMapper {
  public static toRPC(
    entity: Nullable<EntityAttributes<Location>> | undefined
  ): Producers.BranchManagement.Location {
    const location = new Producers.BranchManagement.Location()

    if (entity) {
      location.setId(entity.id)
      location.setName(entity.name)
      location.setAddress(entity.address)
      location.setCountry(entity.country)
      location.setLatitude(entity.coordinates.lat.toString())
      location.setLongitude(entity.coordinates.lng.toString())
      location.setStopServingBeforeInMinutes(entity.stopServingBeforeInMinutes)
    }

    return location
  }
}
