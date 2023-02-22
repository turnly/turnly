/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ResponseCodes } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import {
  CreateAnswersResponse,
  Meta,
} from '../../../src/producers/business-data-fields'
import { AnswerMother } from './answer.mother'

export class AnswersResponseMother {
  static randomForCreate(): CreateAnswersResponse {
    const answers = ObjectMother.repeater(AnswerMother.random, 10)

    return new CreateAnswersResponse().setDataList(answers)
  }

  static randomForCreateError(
    status: ResponseCodes,
    title: string = ObjectMother.names(),
    message: string = ObjectMother.names()
  ): CreateAnswersResponse {
    const meta = new Meta()
      .setStatus(status)
      .setMessage(message)
      .setTitle(title)

    return new CreateAnswersResponse().setMeta(meta)
  }
}
