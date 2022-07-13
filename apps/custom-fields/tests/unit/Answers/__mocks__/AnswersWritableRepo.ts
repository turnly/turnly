/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { IWritableRepository } from '@turnly/shared'
import { TestWritableRepo } from '@turnly/testing'
import { Answer } from 'Answers/domain/entities/Answer'

export class AnswersWritableRepo
  extends TestWritableRepo<Answer>
  implements IWritableRepository<Answer> {}
