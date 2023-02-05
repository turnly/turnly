/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { MongoReadableRepo } from '@turnly/shared'
import { IAnswersMapper } from 'Answers/domain/contracts/IAnswersMapper'
import { IAnswersReadableRepo } from 'Answers/domain/contracts/IAnswersRepo'
import { Answer } from 'Answers/domain/entities/Answer'

import { AnswerDocument, AnswerModel } from '../models/AnswerModel'

export class AnswersReadableRepo
  extends MongoReadableRepo<Answer, AnswerDocument>
  implements IAnswersReadableRepo
{
  public constructor(answersMapper: IAnswersMapper<AnswerDocument>) {
    super(AnswerModel, answersMapper)
  }
}
