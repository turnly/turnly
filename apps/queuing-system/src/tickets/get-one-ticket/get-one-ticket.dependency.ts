/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { GetOneTicketController } from './get-one-ticket.controller'
import { GetOneTicketQueryHandler } from './get-one-ticket.query-handler'
import { GetOneTicketServer } from './get-one-ticket.server'

Box.register({
  getOneTicketQueryHandler: ioc.asClass(GetOneTicketQueryHandler).singleton(),
  getOneTicketServer: ioc.asClass(GetOneTicketServer).singleton(),
  getOneTicketController: ioc.asClass(GetOneTicketController).singleton(),
})
