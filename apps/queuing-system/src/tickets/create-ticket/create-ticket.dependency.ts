/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { CreateTicketCommandHandler } from './create-ticket.command-handler'
import { CreateTicketController } from './create-ticket.controller'
import { CreateTicketServer } from './create-ticket.server'

Box.register({
  createTicketServer: ioc.asClass(CreateTicketServer).singleton(),
  createTicketController: ioc.asClass(CreateTicketController).singleton(),
  createTicketCommandHandler: ioc
    .asClass(CreateTicketCommandHandler)
    .singleton(),
})
