/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable, ResourceNotFoundException } from '@turnly/common'
import {
  Controller,
  EntityAttributes,
  ICommandBus,
  InputValidator,
  IQueryBus,
  TimeoutHandler,
} from '@turnly/shared'
import { CreateAnswersBulkCommand } from 'Answers/application/commands/CreateAnswerBulkCommand'
import { FindAnswersQuery } from 'Answers/application/queries/FindAnswersQuery'
import { Answer } from 'Answers/domain/entities/Answer'

import { validator } from '../validators/AnswersValidator'

export class AnswersController extends Controller {
  public constructor(
    private readonly commandBus: ICommandBus,
    private readonly queryBus: IQueryBus
  ) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(validator.create)
  public async create(params: Omit<EntityAttributes<Answer>, 'id'>[]) {
    const answers = await this.commandBus.execute<
      Answer[],
      CreateAnswersBulkCommand
    >(new CreateAnswersBulkCommand(params))

    return this.respond.created(answers.map(answer => answer.toObject()))
  }

  @TimeoutHandler()
  @InputValidator(validator.find)
  public async find(params: FindAnswersQuery) {
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
