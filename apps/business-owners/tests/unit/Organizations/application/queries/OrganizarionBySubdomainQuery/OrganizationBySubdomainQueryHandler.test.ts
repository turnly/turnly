/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { OrganizationBySubdomainQueryHandler } from '../../../../../../src/Organizations/application/queries/OrganizationBySubdomainQuery'
import { OrganizationsReadableRepo } from '../../../__mocks__/OrganizationsReadableRepo'
import { OrganizationMother } from '../../../domain/OrganizationMother'
import { OrganizationBySubdomainQueryMother } from './OrganizationBySubdomainQueryMother'

let repository: OrganizationsReadableRepo
let handler: OrganizationBySubdomainQueryHandler

describe('organizations > queries > validates the expected behavior of OrganizationBySubdomainQuery', () => {
  beforeEach(() => {
    repository = new OrganizationsReadableRepo()
    handler = new OrganizationBySubdomainQueryHandler(repository)
  })

  it('should get an existing organization', async () => {
    const query = OrganizationBySubdomainQueryMother.random()
    const organization =
      OrganizationMother.fromExistingOrganizationOnQueryBySubdomain(query)

    repository.attachGetOneResponse(organization)

    const response = await handler.execute(query)

    expect(response).toEqual(organization)
    repository.assertGetOneHasBeenCalled()
  })
})
