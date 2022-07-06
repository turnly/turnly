/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { Validator } from '@turnly/shared'

const findCustomerFieldsByService = Validator.object({
  serviceId: Validator.isId(),
  organizationId: Validator.isId(),
})

export const validator = {
  findCustomerFieldsByService,
}
