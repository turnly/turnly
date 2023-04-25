/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { GetOneOrganizationQueryHandler } from '../../../../src/organizations/shared/application/queries'
import { OrganizationsReadableRepo } from '../shared/__mocks__/organizations-readable.repo'
import { OrganizationMother } from '../shared/domain/organization.entity.mother'
import { GetOneOrganizationQueryMother } from './get-one-organization.query.mother'

let repository: OrganizationsReadableRepo
let handler: GetOneOrganizationQueryHandler

describe('organizations > queries > validates the expected behavior of OrganizationByIdQuery', () => {
  beforeEach(() => {
    repository = new OrganizationsReadableRepo()
    handler = new GetOneOrganizationQueryHandler(repository)
  })

  it('should get an existing organization', async () => {
    const query = GetOneOrganizationQueryMother.random()
    const organization =
      OrganizationMother.fromExistingOrganizationOnQuery(query)

    repository.attachGetOneResponse(organization)

    const response = await handler.execute(query)

    expect(response).toEqual(organization)
    repository.assertGetOneHasBeenCalled()
  })
})
