/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { GetOneTicketController } from '../api/get-one-ticket.controller'
import { GetOneTicketServer } from '../api/get-one-ticket.server'

Box.register({
  getOneTicketServer: ioc.asClass(GetOneTicketServer).singleton(),
  getOneTicketController: ioc.asClass(GetOneTicketController).singleton(),
})
