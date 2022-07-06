/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { Validator } from '@turnly/shared'

const get = Validator.object({
  id: Validator.isId(),
})

export const validator = {
  get,
}
