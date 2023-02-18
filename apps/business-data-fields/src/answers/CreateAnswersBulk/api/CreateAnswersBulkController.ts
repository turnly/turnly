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
} from '@turnly/shared'
import { CreateAnswersBulkCommand } from 'answers/CreateAnswersBulk'
import { Answer } from 'answers/shared/domain/entities/Answer'

import { CreateAnswersBulkValidator } from './CreateAnswersBulkValidator'

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
