/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Validator } from '@turnly/shared'

const get = Validator.object({
  id: Validator.isId(),
  organizationId: Validator.isId(),
})

const getServicesByLocation = Validator.object({
  locationId: Validator.isId(),
  organizationId: Validator.isId(),
})

export const validator = {
  get,
  getServicesByLocation,
}
