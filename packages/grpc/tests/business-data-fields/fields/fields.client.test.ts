/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ResponseCodes } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import { Fields } from '../../../src/consumers/business-data-fields/fields/fields.client'
import { FieldsClient } from '../../../src/producers/business-data-fields'
import { TestFieldsClient } from './__mocks__/test-fields.client'
import { FieldsRequestMother } from './fields-request.mother'
import { FieldsResponseMother } from './fields-response.mother'

let fields: Fields
let client: TestFieldsClient

describe('consumers > fields > validates the expected behavior of the FieldsClient', () => {
  beforeEach(() => {
    client = new TestFieldsClient()

    fields = new Fields({ address: '0.0.0.0:50052' })
      .setInternalClient(client as unknown as FieldsClient)
      .setOrganizationId(ObjectMother.uuid('org'))
  })

  it('should get an array of fields by service id', async () => {
    const request = FieldsRequestMother.randomForFindCustomerFieldsByService()
    const expected = FieldsResponseMother.randomForFindCustomerFieldsByService()

    client.attachFindCustomerFieldsByServiceResponse(expected)

    const response = await fields.findCustomerFieldsByService(request)

    client.assertFindCustomerFieldsByServiceHasBeenCalled()
    expect(response).toEqual(expected.toObject())
  })

  it('should throw a BAD_REQUEST error when the request in find is empty', async () => {
    const request =
      FieldsRequestMother.randomForFindCustomerFieldsByServiceEmpty()
    const expected =
      FieldsResponseMother.randomForFindCustomerFieldsByServiceError(
        ResponseCodes.BAD_REQUEST
      )

    client.attachFindCustomerFieldsByServiceResponse(expected)

    const response = await fields.findCustomerFieldsByService(request)

    client.assertFindCustomerFieldsByServiceHasBeenCalled()
    expect(response.dataList).toHaveLength(0)
    expect(response.meta?.status).toEqual(ResponseCodes.BAD_REQUEST)
  })
})
