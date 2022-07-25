/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
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
