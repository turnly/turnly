/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { ObjectMother } from '@turnly/testing'

import { SearchCustomerFieldsByServiceQueryHandler } from '../../../../../../src/Fields/application/queries/SearchCustomerFieldsByServiceQuery'
import { FieldsReadableRepo } from '../../../__mocks__/FieldsReadableRepo'
import { FieldMother } from '../../../domain/FieldMother'
import { SearchCustomerFieldsByServiceQueryMother } from './SearchCustomerFieldsByServiceQueryMother'

let repository: FieldsReadableRepo
let handler: SearchCustomerFieldsByServiceQueryHandler

describe('fields > queries > validates the expected behavior of SearchCustomerFieldsByServiceQuery', () => {
  beforeEach(() => {
    repository = new FieldsReadableRepo()
    handler = new SearchCustomerFieldsByServiceQueryHandler(repository)
  })

  it('should get an array of existing fields', async () => {
    const query = SearchCustomerFieldsByServiceQueryMother.random()

    const expected = ObjectMother.repeater(FieldMother.random, 20)

    repository.attachFindResponse(expected)

    const response = await handler.execute(query)

    expect(response).toEqual(expected)
    repository.assertFindHasBeenCalled()
  })
})
