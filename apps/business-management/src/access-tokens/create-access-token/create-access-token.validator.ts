/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Validator } from '@turnly/core'

export const CreateAccessTokenValidator = Validator.object({
  name: Validator.string(),
  scopes: Validator.getBuilder().array().items(Validator.string()),
  createdByType: Validator.string(),
  createdById: Validator.string(),
  organizationId: Validator.isId(),
})
