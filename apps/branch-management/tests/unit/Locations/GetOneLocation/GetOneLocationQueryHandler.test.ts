/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { GetOneLocationQueryHandler } from '../../../../src/Locations/GetOneLocation'
import { LocationsReadableRepo } from '../Shared/__mocks__/LocationsReadableRepo'
import { LocationMother } from '../Shared/domain/LocationMother'
import { GetOneLocationQueryMother } from './GetOneLocationQueryMother'

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
