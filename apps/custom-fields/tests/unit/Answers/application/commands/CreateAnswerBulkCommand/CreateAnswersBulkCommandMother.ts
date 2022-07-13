/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { EntityAttributes } from '@turnly/shared'

import { CreateAnswersBulkCommand } from '../../../../../../src/Answers/application/commands/CreateAnswerBulkCommand'
import { Answer } from '../../../../../../src/Answers/domain/entities/Answer'
import { AnswerMother } from '../../../domain/AnswerMother'

export class CreateAnswersBulkCommandMother {
  static create(
    params: Omit<
      EntityAttributes<Answer>,
      'id'
    >[] = AnswerMother.randomArrayOfPayload()
  ): CreateAnswersBulkCommand {
    return new CreateAnswersBulkCommand(params)
  }

  static random(): CreateAnswersBulkCommand {
    return this.create()
  }
}
