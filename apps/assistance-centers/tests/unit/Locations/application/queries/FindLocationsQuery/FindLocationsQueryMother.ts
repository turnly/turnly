/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import { FindLocationsQuery } from '../../../../../../src/Locations/application/queries/FindLocationsQuery'

export class FindLocationsQueryMother {
  static create(
    searchQuery: string = ObjectMother.word(),
    country: string = ObjectMother.names(),
    latitude: number = ObjectMother.coords().lat,
    longitude: number = ObjectMother.coords().lng,
    limit: number = ObjectMother.integer(10),
    offset: number = ObjectMother.integer(5),
    organizationId: Guid = ObjectMother.uuid('org')
  ): FindLocationsQuery {
    return new FindLocationsQuery(
      searchQuery,
      country,
      latitude,
      longitude,
      limit,
      offset,
      organizationId
    )
  }

  static random(): FindLocationsQuery {
    return this.create()
  }
}
