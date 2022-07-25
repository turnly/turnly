/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Validator } from '@turnly/shared'

const extra = Validator.object({
  key: Validator.string(),
  value: Validator.string(),
})

const answer = Validator.object({
  value: Validator.string(),
  fieldId: Validator.isId(),
  entityId: Validator.isId(),
  entityType: Validator.string(),
  organizationId: Validator.isId(),
  extra: Validator.getBuilder().array().items(extra).optional(),
})

const create = Validator.getBuilder().array().items(answer).min(1).required()

export const validator = {
  create,
}
