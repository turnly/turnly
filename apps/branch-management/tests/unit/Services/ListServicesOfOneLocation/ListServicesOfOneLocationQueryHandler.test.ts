/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ObjectMother } from '@turnly/testing'

import { ListServicesOfOneLocationQueryHandler } from '../../../../src/Services/ListServicesOfOneLocation'
import { ServicesReadableRepo } from '../Shared/__mocks__/ServicesReadableRepo'
import { ServiceMother } from '../Shared/domain/ServiceMother'
import { ListServicesOfOneLocationQueryMother } from './ListServicesOfOneLocationQueryMother'

let repository: ServicesReadableRepo
let handler: ListServicesOfOneLocationQueryHandler

describe('services > queries > validates the expected behavior of ListServicesOfOneLocationQuery', () => {
  beforeEach(() => {
    repository = new ServicesReadableRepo()
    handler = new ListServicesOfOneLocationQueryHandler(repository)
  })

  it('should get a collection of existing services', async () => {
    const query = ListServicesOfOneLocationQueryMother.random()

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
