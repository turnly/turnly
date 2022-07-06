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

const getServicesByLocation = Validator.object({
  locationId: Validator.isId(),
  organizationId: Validator.isId(),
})

export const validator = {
  get,
  getServicesByLocation,
}
