/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Validator } from '@turnly/core'

export const UpdateSignageDisplayValidator = Validator.object({
  id: Validator.isId(),
  name: Validator.string(),
  refreshTime: Validator.int(),
  clearTicketsAfter: Validator.string(),
  serviceIds: Validator.getBuilder().array().items(Validator.isId()),
  order: Validator.int(),
  organizationId: Validator.isId(),
})
