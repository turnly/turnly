/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import { LocationByIdQuery } from '../../../../src/Locations/application/queries/LocationByIdQuery'
import { Location } from '../../../../src/Locations/domain/entities/Location'

export class LocationMother {
  static create(
    name: string = ObjectMother.names(),
    address: string = ObjectMother.word(),
    coordinates = ObjectMother.coords(),
    country: string = ObjectMother.names(),
    stopServingBeforeInMinutes: number = ObjectMother.integer(60),
    organizationId: Guid = ObjectMother.uuid('org')
  ): Location {
    return Location.create({
      organizationId,
      name,
      address,
      coordinates,
      stopServingBeforeInMinutes,
      country,
    })
  }

  static random(): Location {
    return LocationMother.create()
  }

  static collection(max = ObjectMother.integer(2)): Location[] {
    return ObjectMother.repeater(LocationMother.random, max)
  }

  static fromExistingLocationOnQuery(query: LocationByIdQuery): Location {
    return Location.build({
      ...this.random().toObject(),
      organizationId: query.organizationId,
      id: query.id,
    })
  }
}
