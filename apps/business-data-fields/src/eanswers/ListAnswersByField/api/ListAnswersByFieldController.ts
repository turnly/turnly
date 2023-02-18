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
import { Answer } from 'eanswers/eshared/domain/entities/Answer'
import { ListAnswersByFieldQuery } from 'eanswers/ListAnswersByField'

import { ListAnswersByFieldValidator } from './ListAnswersByFieldValidator'

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
