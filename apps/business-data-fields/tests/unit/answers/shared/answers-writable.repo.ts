/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { IWritableRepository } from '@turnly/core'
import { TestWritableRepo } from '@turnly/testing'
import { Answer } from 'answers/shared/domain/entities/answer.entity'

export class AnswersWritableRepo
  extends TestWritableRepo<Answer>
  implements IWritableRepository<Answer> {}
