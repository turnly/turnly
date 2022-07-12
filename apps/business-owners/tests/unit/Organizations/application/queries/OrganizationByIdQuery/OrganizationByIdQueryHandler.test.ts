/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { OrganizationByIdQueryHandler } from '../../../../../../src/Organizations/application/queries/OrganizationByIdQuery'
import { OrganizationsReadableRepo } from '../../../__mocks__/OrganizationsReadableRepo'
import { OrganizationMother } from '../../../domain/OrganizationMother'
import { OrganizationByIdQueryMother } from './OrganizationByIdQueryMother'

let repository: OrganizationsReadableRepo
let handler: OrganizationByIdQueryHandler

describe('organizations > queries > validates the expected behavior of OrganizationByIdQuery', () => {
  beforeEach(() => {
    repository = new OrganizationsReadableRepo()
    handler = new OrganizationByIdQueryHandler(repository)
  })

  it('should get an existing organization', async () => {
    const query = OrganizationByIdQueryMother.random()
    const organization =
      OrganizationMother.fromExistingOrganizationOnQuery(query)

    repository.attachGetOneResponse(organization)

    const response = await handler.execute(query)

    expect(response).toEqual(organization)
    repository.assertGetOneHasBeenCalled()
  })
})
