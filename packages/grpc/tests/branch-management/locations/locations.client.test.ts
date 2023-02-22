/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ResponseCodes } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import { Locations } from '../../../src/consumers/branch-management/locations/locations.client'
import { LocationsClient } from '../../../src/producers/branch-management'
import { TestLocationsClient } from './__mocks__/test-locations.client'
import { LocationsRequestMother } from './locations-request.mother'
import { LocationsResponseMother } from './locations-response.mother'

let locations: Locations
let client: TestLocationsClient

describe('consumers > locations > validates the expected behavior of the LocationsClient', () => {
  beforeEach(() => {
    client = new TestLocationsClient()

    locations = new Locations({ address: '0.0.0.0:50052' })
      .setInternalClient(client as unknown as LocationsClient)
      .setOrganizationId(ObjectMother.uuid('org'))
  })

  it('should get an existing location by id', async () => {
    const request = LocationsRequestMother.randomForGetOne()
    const expected = LocationsResponseMother.randomForGetOne()

    client.attachGetOneResponse(expected)

    const response = await locations.getOne(request)

    client.assertGetOneHasBeenCalled()
    expect(response).toEqual(expected.toObject())
  })

  it('should throw a BAD_REQUEST error when the request in get one is empty', async () => {
    const request = LocationsRequestMother.randomForGetOneEmpty()
    const expected = LocationsResponseMother.randomForGetOneError(
      ResponseCodes.BAD_REQUEST
    )

    client.attachGetOneResponse(expected)

    const response = await locations.getOne(request)

    client.assertGetOneHasBeenCalled()
    expect(response.data).toBeUndefined()
    expect(response.meta?.status).toEqual(ResponseCodes.BAD_REQUEST)
  })

  it('should get an array of locations', async () => {
    const request =
      LocationsRequestMother.randomForSearchAvailableLocationsForServing()
    const expected =
      LocationsResponseMother.randomForSearchAvailableLocationsForServing()

    client.attachSearchAvailableLocationsForServingResponse(expected)

    const response = await locations.searchAvailableLocationsForServing(request)

    client.assertSearchAvailableLocationsForServingHasBeenCalled()
    expect(response).toEqual(expected.toObject())
  })

  it('should throw a BAD_REQUEST error when the request in find by location is empty', async () => {
    const request =
      LocationsRequestMother.randomForSearchAvailableLocationsForServingEmpty()
    const expected =
      LocationsResponseMother.randomForSearchAvailableLocationsForServingError(
        ResponseCodes.BAD_REQUEST
      )

    client.attachSearchAvailableLocationsForServingResponse(expected)

    const response = await locations.searchAvailableLocationsForServing(request)

    client.assertSearchAvailableLocationsForServingHasBeenCalled()
    expect(response.dataList).toHaveLength(0)
    expect(response.meta?.status).toEqual(ResponseCodes.BAD_REQUEST)
  })
})
