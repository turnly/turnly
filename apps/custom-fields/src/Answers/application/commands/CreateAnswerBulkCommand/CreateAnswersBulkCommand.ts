/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { EntityAttributes, ICommand } from '@turnly/shared'
import { Answer } from 'Answers/domain/entities/Answer'

export class CreateAnswersBulkCommand implements ICommand {
  public constructor(
    public readonly params: Omit<EntityAttributes<Answer>, 'id'>[]
  ) {}
}
