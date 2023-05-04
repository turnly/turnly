/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ResponseCodes } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import { Members } from '../../../src/consumers/tenancy/members/members.client'
import { MembersClient } from '../../../src/producers/tenancy'
import { TestMembersClient } from './__mocks__/test-members.client'
import { MembersRequestMother } from './members-request.mother'
import { MembersResponseMother } from './members-response.mother'

let members: Members
let client: TestMembersClient

describe('consumers > members > validates the expected behavior of the MembersClient', () => {
  beforeEach(() => {
    client = new TestMembersClient()

    members = new Members({ address: '0.0.0.0:50052' })
      .setInternalClient(client as unknown as MembersClient)
      .setOrganizationId(ObjectMother.uuid('org'))
  })

  it('should get an existing member', async () => {
    const request = MembersRequestMother.randomForGetOne()
    const expected = MembersResponseMother.randomForGetOne()

    client.attachGetOneResponse(expected)

    const response = await members.getOne(request)

    client.assertGetOneHasBeenCalled()
    expect(response).toEqual(expected.toObject())
  })

  it('should throw a BAD_REQUEST error when the request is empty', async () => {
    const request = MembersRequestMother.randomForGetOneEmpty()
    const expected = MembersResponseMother.randomForGetOneError(
      ResponseCodes.BAD_REQUEST
    )

    client.attachGetOneResponse(expected)

    const response = await members.getOne(request)

    client.assertGetOneHasBeenCalled()
    expect(response.data).toBeUndefined()
    expect(response.meta?.status).toEqual(ResponseCodes.BAD_REQUEST)
  })
})
