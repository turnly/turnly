/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Validator } from '@turnly/core'

export const ListFeaturesValidator = Validator.object({
  limit: Validator.getBuilder().number().optional(),
  offset: Validator.getBuilder().number().optional(),
})
