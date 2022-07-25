/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ServiceByIdQueryHandler } from '../../../../../../src/Services/application/queries/ServiceByIdQuery'
import { ServicesReadableRepo } from '../../../__mocks__/ServicesReadableRepo'
import { ServiceMother } from '../../../domain/ServiceMother'
import { ServiceByIdQueryMother } from './ServiceByIdQueryMother'

let repository: ServicesReadableRepo
let handler: ServiceByIdQueryHandler

describe('services > queries > validates the expected behavior of ServiceByIdQuery', () => {
  beforeEach(() => {
    repository = new ServicesReadableRepo()
    handler = new ServiceByIdQueryHandler(repository)
  })

  it('should get an existing service', async () => {
    const query = ServiceByIdQueryMother.random()
    const service = ServiceMother.fromExistingServiceOnQuery(query)

    repository.attachGetOneResponse(service)

    const response = await handler.execute(query)

    expect(response).toEqual(service)
    repository.assertGetOneHasBeenCalled()
  })
})
