/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { TestEventBus } from '@turnly/testing'

import { CreateAnswerBulkCommandHandler } from '../../../../../../src/Answers/application/commands/CreateAnswerBulkCommand'
import { AnswersWritableRepo } from '../../../__mocks__/AnswersWritableRepo'
import { CreateAnswersBulkCommandMother } from './CreateAnswersBulkCommandMother'

let repository: AnswersWritableRepo
let eventBus: TestEventBus
let handler: CreateAnswerBulkCommandHandler

describe('answers > commands > validates the expected behavior on answer creation', () => {
  beforeEach(() => {
    eventBus = new TestEventBus()
    repository = new AnswersWritableRepo()
    handler = new CreateAnswerBulkCommandHandler(eventBus, repository)
  })

  it('should create a answer', async () => {
    const command = CreateAnswersBulkCommandMother.random()
    const answers = await handler.execute(command)

    repository.assertSaveHasBeenCalledWith(answers)
    eventBus.assertPublishCalled()
  })
})
