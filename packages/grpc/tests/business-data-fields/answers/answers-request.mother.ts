/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ObjectMother } from '@turnly/testing'

import { ICreateAnswersRequest } from '../../../src/consumers/business-data-fields'
import { AnswerMother } from './answer.mother'

export class AnswersRequestMother {
  static randomForCreate(): ICreateAnswersRequest {
    return {
      answersList: ObjectMother.repeater(AnswerMother.randomToObject, 10),
    }
  }

  static randomForCreateEmpty(): ICreateAnswersRequest {
    return {
      answersList: [],
    }
  }
}
