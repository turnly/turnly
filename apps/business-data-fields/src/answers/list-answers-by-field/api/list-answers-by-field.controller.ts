/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'
import {
  Controller,
  InputValidator,
  IQueryBus,
  TimeoutHandler,
} from '@turnly/core'
import { ResourceNotFoundException } from '@turnly/observability'
import { ListAnswersByFieldQuery } from 'answers/list-answers-by-field'
import { Answer } from 'answers/shared/domain/entities/answer.entity'

import { ListAnswersByFieldValidator } from './list-answers-by-field.validator'

export class ListAnswersByFieldController extends Controller {
  public constructor(private readonly queryBus: IQueryBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(ListAnswersByFieldValidator)
  public async execute(params: ListAnswersByFieldQuery) {
    const answers = await this.queryBus.ask<Nullable<Answer[]>>(
      ListAnswersByFieldQuery.build(params)
    )

    if (!answers?.length) throw new ResourceNotFoundException()

    return this.respond.ok(answers.map(answer => answer.toObject()))
  }
}
