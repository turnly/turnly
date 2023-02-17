/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ObjectMother } from '@turnly/testing'

import { FindAnswersQueryHandler } from '../../../../src/Answers/FindAnswers'
import { AnswersReadableRepo } from '../Shared/__mocks__/AnswersReadableRepo'
import { AnswerMother } from '../Shared/domain/AnswerMother'
import { FindAnswersQueryMother } from './FindAnswersQueryMother'

let repository: AnswersReadableRepo
let handler: FindAnswersQueryHandler

describe('answers > queries > validates the expected behavior of FindAnswersQuery', () => {
  beforeEach(() => {
    repository = new AnswersReadableRepo()
    handler = new FindAnswersQueryHandler(repository)
  })

  it('should get a collection of existing answers', async () => {
    const query = FindAnswersQueryMother.random()

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
