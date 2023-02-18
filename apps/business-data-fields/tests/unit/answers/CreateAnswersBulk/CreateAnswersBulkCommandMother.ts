/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ObjectMother } from '@turnly/testing'

import { CreateAnswersBulkCommand } from '../../../../src/answers/CreateAnswersBulk'
import { AnswerMother } from '../shared/domain/AnswerMother'

export class CreateAnswersBulkCommandMother {
  static create(): CreateAnswersBulkCommand {
    return CreateAnswersBulkCommand.build({
      answers: AnswerMother.randomArrayOfPayload(),
      organizationId: ObjectMother.uuid('org'),
    })
  }

  static random(): CreateAnswersBulkCommand {
    return this.create()
  }
}
