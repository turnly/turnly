/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Validator } from '@turnly/shared'

const findCustomerFieldsByService = Validator.object({
  serviceId: Validator.isId(),
  organizationId: Validator.isId(),
})

export const validator = {
  findCustomerFieldsByService,
}
