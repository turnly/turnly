/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Validator } from '@turnly/core'

export const CreateDeviceValidator = Validator.object({
  name: Validator.string(),
  status: Validator.string(),
  type: Validator.string(),
  organizationId: Validator.isId(),
})
