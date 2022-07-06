/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { Validator } from '@turnly/shared'

const get = Validator.object({
  id: Validator.isId(),
})

const getBySubdomain = Validator.object({
  subdomain: Validator.string(),
})

export const validator = {
  get,
  getBySubdomain,
}
