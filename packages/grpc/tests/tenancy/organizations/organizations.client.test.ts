/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ResponseCodes } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import { Organizations } from '../../../src/consumers/tenancy/organizations/organizations.client'
import { OrganizationsClient } from '../../../src/producers/tenancy'
import { TestOrganizationsClient } from './__mocks__/test-organizations.client'
import { OrganizationsRequestMother } from './organizations-request.mother'
import { OrganizationsResponseMother } from './organizations-response.mother'

let organizations: Organizations
let client: TestOrganizationsClient

describe('consumers > organizations > validates the expected behavior of the OrganizationsClient', () => {
  beforeEach(() => {
    client = new TestOrganizationsClient()

    organizations = new Organizations({ address: '0.0.0.0:50052' })
      .setInternalClient(client as unknown as OrganizationsClient)
      .setOrganizationId(ObjectMother.uuid('org'))
  })

  it('should get an existing organization by id', async () => {
    const request = OrganizationsRequestMother.randomForGetOne()
    const expected = OrganizationsResponseMother.randomForGetOne()

    client.attachGetOneResponse(expected)

    const response = await organizations.getOne(request)

    client.assertGetOneHasBeenCalled()
    expect(response).toEqual(expected.toObject())
  })

  it('should throw a BAD_REQUEST error when the request is empty getting by id', async () => {
    const request = OrganizationsRequestMother.randomForGetOneEmpty()
    const expected = OrganizationsResponseMother.randomForGetOneError(
      ResponseCodes.BAD_REQUEST
    )

    client.attachGetOneResponse(expected)

    const response = await organizations.getOne(request)

    client.assertGetOneHasBeenCalled()
    expect(response.data).toBeUndefined()
    expect(response.meta?.status).toEqual(ResponseCodes.BAD_REQUEST)
  })

  it('should get an existing organization by subdomain', async () => {
    const request = OrganizationsRequestMother.randomForGetOneBySubdomain()
    const expected = OrganizationsResponseMother.randomForGetOne()

    client.attachGetOneBySubdomainResponse(expected)

    const response = await organizations.getBySubdomain(request)

    client.assertGetOneBySubdomainHasBeenCalled()
    expect(response).toEqual(expected.toObject())
  })

  it('should throw a BAD_REQUEST error when the request is empty getting by subdomain', async () => {
    const request = OrganizationsRequestMother.randomForGetOneBySubdomainEmpty()
    const expected = OrganizationsResponseMother.randomForGetOneError(
      ResponseCodes.BAD_REQUEST
    )

    client.attachGetOneBySubdomainResponse(expected)

    const response = await organizations.getBySubdomain(request)

    client.assertGetOneBySubdomainHasBeenCalled()
    expect(response.data).toBeUndefined()
    expect(response.meta?.status).toEqual(ResponseCodes.BAD_REQUEST)
  })
})
