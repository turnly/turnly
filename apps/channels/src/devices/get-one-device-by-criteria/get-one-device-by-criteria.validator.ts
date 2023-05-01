/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Validator } from '@turnly/core'

export const GetOneDeviceByCriteriaValidator = Validator.object({
  status: Validator.string().optional(),
  pairingCode: Validator.string().optional(),
  locationId: Validator.string().optional(),
  createdAt: Validator.getBuilder().date().optional(),
  organizationId: Validator.string(),
})
