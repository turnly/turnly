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

const create = Validator.object({
  serviceId: Validator.isId(),
  locationId: Validator.isId(),
  customerId: Validator.isId(),
  organizationId: Validator.isId(),
  extra: Validator.getBuilder().array().items(extra).optional(),
})

export const validator = {
  create,
}
