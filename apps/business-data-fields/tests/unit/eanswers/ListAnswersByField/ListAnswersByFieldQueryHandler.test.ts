/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ObjectMother } from '@turnly/testing'

import { ListAnswersByFieldQueryHandler } from '../../../../src/eanswers/ListAnswersByField'
import { AnswersReadableRepo } from '../eshared/__mocks__/AnswersReadableRepo'
import { AnswerMother } from '../eshared/domain/AnswerMother'
import { ListAnswersByFieldQueryMother } from './ListAnswersByFieldQueryMother'

let repository: AnswersReadableRepo
let handler: ListAnswersByFieldQueryHandler

describe('answers > queries > validates the expected behavior of ListAnswersByFieldQuery', () => {
  beforeEach(() => {
    repository = new AnswersReadableRepo()
    handler = new ListAnswersByFieldQueryHandler(repository)
  })

  it('should get a collection of existing answers', async () => {
    const query = ListAnswersByFieldQueryMother.random()

    const expected = ObjectMother.repeater(
      AnswerMother.random,
      ObjectMother.integer(1)
    )

    repository.attachFindResponse(expected)

    const response = await handler.execute(query)

    expect(response).toEqual(expected)
    repository.assertFindHasBeenCalled()
  })
})
