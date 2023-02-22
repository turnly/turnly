/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ResponseCodes } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import { Answers } from '../../../src/consumers/business-data-fields/answers/answers.client'
import { AnswersClient } from '../../../src/producers/business-data-fields'
import { TestAnswersClient } from './__mocks__/test-answers.client'
import { AnswersRequestMother } from './answers-request.mother'
import { AnswersResponseMother } from './answers-response.mother'

let answers: Answers
let client: TestAnswersClient

describe('consumers > answers > validates the expected behavior of the AnswersClient', () => {
  beforeEach(() => {
    client = new TestAnswersClient()

    answers = new Answers({ address: '0.0.0.0:50052' })
      .setInternalClient(client as unknown as AnswersClient)
      .setOrganizationId(ObjectMother.uuid('org'))
  })

  it('should create an array of answers', async () => {
    const request = AnswersRequestMother.randomForCreate()
    const expected = AnswersResponseMother.randomForCreate()

    client.attachCreateAnswersResponse(expected)

    const response = await answers.create(request)

    client.assertCreateAnswersHasBeenCalled()
    expect(response).toEqual(expected.toObject())
  })

  it('should throw a BAD_REQUEST error when the request in find by answer is empty', async () => {
    const request = AnswersRequestMother.randomForCreateEmpty()
    const expected = AnswersResponseMother.randomForCreateError(
      ResponseCodes.BAD_REQUEST
    )

    client.attachCreateAnswersResponse(expected)

    const response = await answers.create(request)

    client.assertCreateAnswersHasBeenCalled()
    expect(response.dataList).toHaveLength(0)
    expect(response.meta?.status).toEqual(ResponseCodes.BAD_REQUEST)
  })
})
