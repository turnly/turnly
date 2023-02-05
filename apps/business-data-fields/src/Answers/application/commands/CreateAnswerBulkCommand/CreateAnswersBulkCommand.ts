/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { EntityAttributes, ICommand } from '@turnly/shared'
import { Answer } from 'Answers/domain/entities/Answer'

export class CreateAnswersBulkCommand implements ICommand {
  public constructor(
    public readonly params: Omit<EntityAttributes<Answer>, 'id'>[]
  ) {}
}
