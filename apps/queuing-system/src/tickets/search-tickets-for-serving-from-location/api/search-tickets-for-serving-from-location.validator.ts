/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Validator } from '@turnly/shared'

export const SearchTicketsForServingFromLocationValidator = Validator.object({
  serviceIds: Validator.getBuilder().array().items(Validator.isId(true)),
  locationId: Validator.isId(),
  organizationId: Validator.isId(),
  searchQuery: Validator.string(true),
  status: Validator.string(true),
})
