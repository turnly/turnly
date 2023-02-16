/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable, ResourceNotFoundException } from '@turnly/common'
import {
  Controller,
  InputValidator,
  IQueryBus,
  TimeoutHandler,
} from '@turnly/shared'
import { FindAnswersQuery } from 'Answers/FindAnswers'
import { Answer } from 'Answers/Shared/domain/entities/Answer'

import { FindAnswersValidator } from './FindAnswersValidator'

export class FindAnswersController extends Controller {
  public constructor(private readonly queryBus: IQueryBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(FindAnswersValidator)
  public async execute(params: FindAnswersQuery) {
    const answers = await this.queryBus.ask<Nullable<Answer[]>>(
      new FindAnswersQuery(
        params.organizationId,
        params.entityType,
        params.fieldId,
        params.extra
      )
    )

    if (!answers?.length) throw new ResourceNotFoundException()

    return this.respond.ok(answers.map(answer => answer.toObject()))
  }
}
