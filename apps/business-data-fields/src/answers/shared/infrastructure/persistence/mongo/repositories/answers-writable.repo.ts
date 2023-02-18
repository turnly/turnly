/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { MongoWritableRepo } from '@turnly/shared'
import { IAnswersMapper } from 'answers/shared/domain/contracts/answers-mapper.interface'
import { IAnswersWritableRepo } from 'answers/shared/domain/contracts/answers-repo.interface'
import { Answer } from 'answers/shared/domain/entities/answer.entity'

import { AnswerDocument, AnswerModel } from '../models/answer.model'

export class AnswersWritableRepo
  extends MongoWritableRepo<Answer, AnswerDocument>
  implements IAnswersWritableRepo
{
  public constructor(answersMapper: IAnswersMapper<AnswerDocument>) {
    super(AnswerModel, answersMapper)
  }
}
