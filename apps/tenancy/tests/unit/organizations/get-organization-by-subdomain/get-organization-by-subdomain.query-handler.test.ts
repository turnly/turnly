/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { GetOrganizationBySubdomainQueryHandler } from '../../../../src/organizations/get-organization-by-subdomain'
import { OrganizationMother } from '../shared/organization.entity.mother'
import { OrganizationsReadableRepo } from '../shared/organizations-readable.repo'
import { GetOrganizationBySubdomainQueryMother } from './get-organization-by-subdomain.query.mother'

let repository: OrganizationsReadableRepo
let handler: GetOrganizationBySubdomainQueryHandler

describe('organizations > queries > validates the expected behavior of GetOrganizationBySubdomainQuery', () => {
  beforeEach(() => {
    repository = new OrganizationsReadableRepo()
    handler = new GetOrganizationBySubdomainQueryHandler(repository)
  })

  it('should get an existing organization', async () => {
    const query = GetOrganizationBySubdomainQueryMother.random()
    const organization =
      OrganizationMother.fromExistingOrganizationOnQueryBySubdomain(query)

    repository.attachGetOneResponse(organization)

    const response = await handler.execute(query)

    expect(response).toEqual(organization)
    repository.assertGetOneHasBeenCalled()
  })
})
