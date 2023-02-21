/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ObjectMother } from '@turnly/testing'

import { ListServicesOfOneLocationQueryHandler } from '../../../../src/services/list-services-of-one-location'
import { ServicesReadableRepo } from '../shared/__mocks__/services-readable.repo'
import { ServiceMother } from '../shared/domain/service.entity.mother'
import { ListServicesOfOneLocationQueryMother } from './list-services-of-one-location.query.mother'

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
