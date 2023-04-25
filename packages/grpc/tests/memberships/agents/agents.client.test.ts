/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ResponseCodes } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import { Agents } from '../../../src/consumers/memberships/agents/agents.client'
import { AgentsClient } from '../../../src/producers/memberships'
import { TestAgentsClient } from './__mocks__/test-agents.client'
import { AgentsRequestMother } from './agents-request.mother'
import { AgentsResponseMother } from './agents-response.mother'

let agents: Agents
let client: TestAgentsClient

describe('consumers > agents > validates the expected behavior of the AgentsClient', () => {
  beforeEach(() => {
    client = new TestAgentsClient()

    agents = new Agents({ address: '0.0.0.0:50052' })
      .setInternalClient(client as unknown as AgentsClient)
      .setOrganizationId(ObjectMother.uuid('org'))
  })

  it('should get an existing agent', async () => {
    const request = AgentsRequestMother.randomForGetOne()
    const expected = AgentsResponseMother.randomForGetOne()

    client.attachGetOneResponse(expected)

    const response = await agents.getOne(request)

    client.assertGetOneHasBeenCalled()
    expect(response).toEqual(expected.toObject())
  })

  it('should throw a BAD_REQUEST error when the request is empty', async () => {
    const request = AgentsRequestMother.randomForGetOneEmpty()
    const expected = AgentsResponseMother.randomForGetOneError(
      ResponseCodes.BAD_REQUEST
    )

    client.attachGetOneResponse(expected)

    const response = await agents.getOne(request)

    client.assertGetOneHasBeenCalled()
    expect(response.data).toBeUndefined()
    expect(response.meta?.status).toEqual(ResponseCodes.BAD_REQUEST)
  })
})
