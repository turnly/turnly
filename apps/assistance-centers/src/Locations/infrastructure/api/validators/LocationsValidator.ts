/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { Validator } from '@turnly/shared'

const get = Validator.object({
  id: Validator.isId(),
  organizationId: Validator.isId(),
})

const find = Validator.object({
  searchQuery: Validator.string(true),
  country: Validator.string(true),
  ...Validator.coords(),
  limit: Validator.int(true),
  offset: Validator.int(true),
  organizationId: Validator.isId(),
})

export const validator = {
  get,
  find,
}
