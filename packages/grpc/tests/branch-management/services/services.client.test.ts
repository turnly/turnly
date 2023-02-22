/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ResponseCodes } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import { Services } from '../../../src/consumers/branch-management/services/services.client'
import { ServicesClient } from '../../../src/producers/branch-management'
import { TestServicesClient } from './__mocks__/test-services.client'
import { ServicesRequestMother } from './services-request.mother'
import { ServicesResponseMother } from './services-response.mother'

let services: Services
let client: TestServicesClient

describe('consumers > services > validates the expected behavior of the ServicesClient', () => {
  beforeEach(() => {
    client = new TestServicesClient()

    services = new Services({ address: '0.0.0.0:50052' })
      .setInternalClient(client as unknown as ServicesClient)
      .setOrganizationId(ObjectMother.uuid('org'))
  })

  it('should get an existing service by id', async () => {
    const request = ServicesRequestMother.randomForGetOne()
    const expected = ServicesResponseMother.randomForGetOne()

    client.attachGetOneResponse(expected)

    const response = await services.getOne(request)

    client.assertGetOneHasBeenCalled()
    expect(response).toEqual(expected.toObject())
  })

  it('should throw a BAD_REQUEST error when the request in get one is empty', async () => {
    const request = ServicesRequestMother.randomForGetOneEmpty()
    const expected = ServicesResponseMother.randomForGetOneError(
      ResponseCodes.BAD_REQUEST
    )

    client.attachGetOneResponse(expected)

    const response = await services.getOne(request)

    client.assertGetOneHasBeenCalled()
    expect(response.data).toBeUndefined()
    expect(response.meta?.status).toEqual(ResponseCodes.BAD_REQUEST)
  })

  it('should get an array of services find by location', async () => {
    const request = ServicesRequestMother.randomForListServicesOfOneLocation()
    const expected = ServicesResponseMother.randomForListServicesOfOneLocation()

    client.attachListServicesOfOneLocationResponse(expected)

    const response = await services.listServicesOfOneLocation(request)

    client.assertListServicesOfOneLocationHasBeenCalled()
    expect(response).toEqual(expected.toObject())
  })

  it('should throw a BAD_REQUEST error when the request in find by location is empty', async () => {
    const request =
      ServicesRequestMother.randomForListServicesOfOneLocationEmpty()
    const expected =
      ServicesResponseMother.randomForListServicesOfOneLocationError(
        ResponseCodes.BAD_REQUEST
      )

    client.attachListServicesOfOneLocationResponse(expected)

    const response = await services.listServicesOfOneLocation(request)

    client.assertListServicesOfOneLocationHasBeenCalled()
    expect(response.dataList).toHaveLength(0)
    expect(response.meta?.status).toEqual(ResponseCodes.BAD_REQUEST)
  })
})
