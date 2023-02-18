/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import { SearchAvailableLocationsForServingQuery } from '../../../../src/Locations/SearchAvailableLocationsForServing'

export class SearchAvailableLocationsForServingQueryMother {
  static create(
    searchQuery: string = ObjectMother.word(),
    country: string = ObjectMother.names(),
    latitude: number = ObjectMother.coords().lat,
    longitude: number = ObjectMother.coords().lng,
    limit: number = ObjectMother.integer(10),
    offset: number = ObjectMother.integer(5),
    organizationId: Guid = ObjectMother.uuid('org')
  ): SearchAvailableLocationsForServingQuery {
    return SearchAvailableLocationsForServingQuery.build({
      organizationId,
      searchQuery,
      country,
      limit,
      offset,
      latitude,
      longitude,
    })
  }

  static random(): SearchAvailableLocationsForServingQuery {
    return this.create()
  }
}
