/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Validator } from '@turnly/shared'

export const MarkTicketAsDiscardedValidator = Validator.object({
  id: Validator.isId(),
  organizationId: Validator.isId(),
})
