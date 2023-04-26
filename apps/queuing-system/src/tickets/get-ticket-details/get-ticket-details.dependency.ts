/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { GetTicketDetailsController } from './get-ticket-details.controller'
import { GetTicketDetailsServer } from './get-ticket-details.server'

Box.register({
  getTicketDetailsServer: ioc.asClass(GetTicketDetailsServer).singleton(),
  getTicketDetailsController: ioc
    .asClass(GetTicketDetailsController)
    .singleton(),
})
