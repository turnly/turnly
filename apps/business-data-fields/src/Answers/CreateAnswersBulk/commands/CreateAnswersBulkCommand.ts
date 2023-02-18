/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { EntityAttributes, OrganizationCommand } from '@turnly/shared'
import { Answer } from 'Answers/Shared/domain/entities/Answer'

export type AnswerAttributes = Omit<
  EntityAttributes<Answer>,
  'id' | 'organizationId'
>

export class CreateAnswersBulkCommand extends OrganizationCommand {
  public readonly answers: AnswerAttributes[]
}
