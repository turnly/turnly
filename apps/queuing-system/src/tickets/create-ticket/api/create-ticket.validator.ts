/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Validator } from '@turnly/core'

const extra = Validator.object({
  key: Validator.string(),
  value: Validator.string(),
})

export const CreateTicketValidator = Validator.object({
  serviceId: Validator.isId(),
  serviceName: Validator.string(),
  locationId: Validator.isId(),
  customerId: Validator.isId(),
  organizationId: Validator.isId(),
  extra: Validator.getBuilder().array().items(extra).optional(),
})
