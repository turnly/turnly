/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { GetOneServiceQueryHandler } from '../../../../src/Services/GetOneService'
import { ServicesReadableRepo } from '../Shared/__mocks__/ServicesReadableRepo'
import { ServiceMother } from '../Shared/domain/ServiceMother'
import { GetOneServiceQueryMother } from './GetOneServiceQueryMother'

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
