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

export const ListAnswersByFieldValidator = Validator.object({
  entityType: Validator.string(),
  organizationId: Validator.isId(),
  fieldId: Validator.isId(true),
  extra: Validator.getBuilder().array().items(extra).optional(),
})
