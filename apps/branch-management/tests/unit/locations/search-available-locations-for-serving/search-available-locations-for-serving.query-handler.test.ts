/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ObjectMother } from '@turnly/testing'

import { SearchAvailableLocationsForServingQueryHandler } from '../../../../src/locations/search-available-locations-for-serving'
import { LocationsReadableRepo } from '../shared/__mocks__/locations-readable.repo'
import { LocationMother } from '../shared/domain/location.entity.mother'
import { SearchAvailableLocationsForServingQueryMother } from './search-available-locations-for-serving.query.mother'

let repository: LocationsReadableRepo
let handler: SearchAvailableLocationsForServingQueryHandler

describe('locations > queries > validates the expected behavior of SearchAvailableLocationsForServingQuery', () => {
  beforeEach(() => {
    repository = new LocationsReadableRepo()
    handler = new SearchAvailableLocationsForServingQueryHandler(repository)
  })

  it('should get a collection of existing locations', async () => {
    const query = SearchAvailableLocationsForServingQueryMother.random()

    const expected = ObjectMother.repeater(
      LocationMother.random,
      ObjectMother.integer(1)
    )

    repository.attachFindResponse(expected)

    const response = await handler.execute(query)

    expect(response).toEqual(expected)
    repository.assertFindHasBeenCalled()
  })
})
