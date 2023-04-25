/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import {
  Controller,
  ICommandBus,
  InputValidator,
  TimeoutHandler,
} from '@turnly/core'
import { CreateAnswersBulkCommand } from 'answers/create-answers-bulk'
import { Answer } from 'answers/shared/domain/entities/answer.entity'

import { CreateAnswersBulkValidator } from './create-answers-bulk.validator'

export class CreateAnswersBulkController extends Controller {
  public constructor(private readonly commandBus: ICommandBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(CreateAnswersBulkValidator)
  public async execute(params: CreateAnswersBulkCommand) {
    const answers = await this.commandBus.execute<
      Answer[],
      CreateAnswersBulkCommand
    >(CreateAnswersBulkCommand.build(params))

    return this.respond.created(answers.map(answer => answer.toObject()))
  }
}
