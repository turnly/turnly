/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
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
