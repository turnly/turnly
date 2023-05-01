/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { GetAnUnexpiredTicketQueryHandler } from './get-an-unexpired-ticket.query-handler'

Box.register({
  getAnUnexpiredTicketQueryHandler: ioc
    .asClass(GetAnUnexpiredTicketQueryHandler)
    .singleton(),
})
