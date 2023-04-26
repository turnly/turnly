/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Validator } from '@turnly/core'

const extra = Validator.object({
  key: Validator.string(),
  value: Validator.string(),
})

const answer = Validator.object({
  value: Validator.string(),
  fieldId: Validator.isId(),
  entityId: Validator.isId(),
  entityType: Validator.string(),
  extra: Validator.getBuilder().array().items(extra).optional(),
})

export const CreateAnswersBulkValidator = Validator.object({
  organizationId: Validator.isId(),
  answers: Validator.getBuilder().array().items(answer).min(1).required(),
})
