/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { GetOneServiceQueryHandler } from '../../../../src/services/get-one-service'
import { ServicesReadableRepo } from '../shared/__mocks__/services-readable.repo'
import { ServiceMother } from '../shared/domain/service.entity.mother'
import { GetOneServiceQueryMother } from './get-one-service.query.mother'

let repository: ServicesReadableRepo
let handler: GetOneServiceQueryHandler

describe('services > queries > validates the expected behavior of GetOneServiceQuery', () => {
  beforeEach(() => {
    repository = new ServicesReadableRepo()
    handler = new GetOneServiceQueryHandler(repository)
  })

  it('should get an existing service', async () => {
    const query = GetOneServiceQueryMother.random()
    const service = ServiceMother.fromExistingServiceOnQuery(query)

    repository.attachGetOneResponse(service)

    const response = await handler.execute(query)

    expect(response).toEqual(service)
    repository.assertGetOneHasBeenCalled()
  })
})
