/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { TestEventBus } from '@turnly/testing'

import { CreateAnswersBulkCommandHandler } from '../../../../src/eanswers/CreateAnswersBulk'
import { AnswersWritableRepo } from '../eshared/__mocks__/AnswersWritableRepo'
import { CreateAnswersBulkCommandMother } from './CreateAnswersBulkCommandMother'

let repository: AnswersWritableRepo
let eventBus: TestEventBus
let handler: CreateAnswersBulkCommandHandler

describe('answers > commands > validates the expected behavior on answer creation', () => {
  beforeEach(() => {
    eventBus = new TestEventBus()
    repository = new AnswersWritableRepo()
    handler = new CreateAnswersBulkCommandHandler(eventBus, repository)
  })

  it('should create answers in bulk from a collection of raw answers', async () => {
    const command = CreateAnswersBulkCommandMother.random()
    const answers = await handler.execute(command)

    repository.assertSaveHasBeenCalledWith(answers)
    eventBus.assertPublishCalled()
  })
})
