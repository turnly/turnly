/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { QueryBuilder } from '@turnly/shared'

import { Answer } from '../../../../../src/Answers/domain/entities/Answer'

export class AnswersQueryMother {
  static getOneWith(answer: Answer) {
    const { id, organizationId } = answer.toObject()

    return new QueryBuilder<Answer>()
      .equal('id', id)
      .equal('organizationId', organizationId)
      .getOne()
  }

  static getManyIn(answers: Answer[]) {
    const ids = answers.map(answer => answer.toObject().id)

    return new QueryBuilder<Answer>().in('id', ids).getMany(0, ids.length)
  }
}
