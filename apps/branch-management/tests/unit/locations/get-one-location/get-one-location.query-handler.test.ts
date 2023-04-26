/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { GetOneLocationQueryHandler } from '../../../../src/locations/get-one-location'
import { LocationMother } from '../shared/location.entity.mother'
import { LocationsReadableRepo } from '../shared/locations-readable.repo'
import { GetOneLocationQueryMother } from './get-one-location.query.mother'

let repository: LocationsReadableRepo
let handler: GetOneLocationQueryHandler

describe('locations > queries > validates the expected behavior of GetOneLocationQuery', () => {
  beforeEach(() => {
    repository = new LocationsReadableRepo()
    handler = new GetOneLocationQueryHandler(repository)
  })

  it('should get an existing location', async () => {
    const query = GetOneLocationQueryMother.random()
    const location = LocationMother.fromExistingLocationOnQuery(query)

    repository.attachGetOneResponse(location)

    const response = await handler.execute(query)

    expect(response).toEqual(location)
    repository.assertGetOneHasBeenCalled()
  })
})
