/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ObjectMother } from '@turnly/testing'

import { ListAnswersByFieldQueryHandler } from '../../../../src/answers/list-answers-by-field'
import { AnswerMother } from '../shared/answer.entity.mother'
import { AnswersReadableRepo } from '../shared/answers-readable.repo'
import { ListAnswersByFieldQueryMother } from './list-answers-by-field.query.mother'

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
