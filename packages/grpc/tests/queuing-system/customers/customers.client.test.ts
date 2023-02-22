/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ResponseCodes } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import { Customers } from '../../../src/consumers/queuing-system/customers/customers.client'
import { CustomersClient } from '../../../src/producers/queuing-system'
import { TestCustomersClient } from './__mocks__/test-customers.client'
import { CustomersRequestMother } from './customers-request.mother'
import { CustomersResponseMother } from './customers-response.mother'

let customers: Customers
let client: TestCustomersClient

describe('consumers > customers > validates the expected behavior of the CustomersClient', () => {
  beforeEach(() => {
    client = new TestCustomersClient()

    customers = new Customers({ address: '0.0.0.0:50052' })
      .setInternalClient(client as unknown as CustomersClient)
      .setOrganizationId(ObjectMother.uuid('org'))
  })

  it('should create a customers', async () => {
    const request = CustomersRequestMother.randomForCreate()
    const expected = CustomersResponseMother.randomForCreate()

    client.attachCreateResponse(expected)

    const response = await customers.create(request)

    client.assertCreateHasBeenCalled()
    expect(response).toEqual(expected.toObject())
  })

  it('should throw a BAD_REQUEST error when the request in create customer is empty', async () => {
    const request = CustomersRequestMother.randomForCreateEmpty()
    const expected = CustomersResponseMother.randomForCreateError(
      ResponseCodes.BAD_REQUEST
    )

    client.attachCreateResponse(expected)

    const response = await customers.create(request)

    client.assertCreateHasBeenCalled()
    expect(response.data).toBeUndefined
    expect(response.meta?.status).toEqual(ResponseCodes.BAD_REQUEST)
  })

  it('should get a customers by id', async () => {
    const request = CustomersRequestMother.randomForGetOne()
    const expected = CustomersResponseMother.randomForGetOne()

    client.attachGetOneResponse(expected)

    const response = await customers.getOne(request)

    client.assertGetOneHasBeenCalled()
    expect(response).toEqual(expected.toObject())
  })

  it('should throw a BAD_REQUEST error when the request in get one customer is empty', async () => {
    const request = CustomersRequestMother.randomForGetOneEmpty()
    const expected = CustomersResponseMother.randomForGetOneError(
      ResponseCodes.BAD_REQUEST
    )

    client.attachGetOneResponse(expected)

    const response = await customers.getOne(request)

    client.assertGetOneHasBeenCalled()
    expect(response.data).toBeUndefined
    expect(response.meta?.status).toEqual(ResponseCodes.BAD_REQUEST)
  })
})
