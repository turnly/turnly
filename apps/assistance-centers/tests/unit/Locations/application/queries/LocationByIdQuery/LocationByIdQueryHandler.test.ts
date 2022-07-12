/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { LocationByIdQueryHandler } from '../../../../../../src/Locations/application/queries/LocationByIdQuery'
import { LocationsReadableRepo } from '../../../__mocks__/LocationsReadableRepo'
import { LocationMother } from '../../../domain/LocationMother'
import { LocationByIdQueryMother } from './LocationByIdQueryMother'

let repository: LocationsReadableRepo
let handler: LocationByIdQueryHandler

describe('locations > queries > validates the expected behavior of LocationByIdQuery', () => {
  beforeEach(() => {
    repository = new LocationsReadableRepo()
    handler = new LocationByIdQueryHandler(repository)
  })

  it('should get an existing location', async () => {
    const query = LocationByIdQueryMother.random()
    const location = LocationMother.fromExistingLocationOnQuery(query)

    repository.attachGetOneResponse(location)

    const response = await handler.execute(query)

    expect(response).toEqual(location)
    repository.assertGetOneHasBeenCalled()
  })
})
