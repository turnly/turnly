/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ObjectMother } from '@turnly/testing'

import { SearchAvailableLocationsForServingQueryHandler } from '../../../../src/Locations/SearchAvailableLocationsForServing'
import { LocationsReadableRepo } from '../Shared/__mocks__/LocationsReadableRepo'
import { LocationMother } from '../Shared/domain/LocationMother'
import { SearchAvailableLocationsForServingQueryMother } from './SearchAvailableLocationsForServingQueryMother'

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
