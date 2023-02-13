/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ObjectMother } from '@turnly/testing'

import { GetServicesOfOneLocationQueryHandler } from '../../../../src/Services/GetServicesOfOneLocation'
import { ServicesReadableRepo } from '../Shared/__mocks__/ServicesReadableRepo'
import { ServiceMother } from '../Shared/domain/ServiceMother'
import { GetServicesOfOneLocationQueryMother } from './GetServicesOfOneLocationQueryMother'

let repository: ServicesReadableRepo
let handler: GetServicesOfOneLocationQueryHandler

describe('services > queries > validates the expected behavior of GetServicesOfOneLocationQuery', () => {
  beforeEach(() => {
    repository = new ServicesReadableRepo()
    handler = new GetServicesOfOneLocationQueryHandler(repository)
  })

  it('should get a collection of existing services', async () => {
    const query = GetServicesOfOneLocationQueryMother.random()

    const expected = ObjectMother.repeater(
      ServiceMother.random,
      ObjectMother.integer(1)
    )

    repository.attachFindResponse(expected)

    const response = await handler.execute(query)

    expect(response).toEqual(expected)
    repository.assertFindHasBeenCalled()
  })
})
