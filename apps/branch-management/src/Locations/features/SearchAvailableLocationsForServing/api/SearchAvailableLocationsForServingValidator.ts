/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Validator } from '@turnly/shared'

export const SearchAvailableLocationsForServingValidator = Validator.object({
  searchQuery: Validator.string(true),
  country: Validator.string(true),
  ...Validator.coords(),
  limit: Validator.int(true),
  offset: Validator.int(true),
  organizationId: Validator.isId(),
})
