/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { CreateTicketController } from '../api/create-ticket.controller'
import { CreateTicketServer } from '../api/create-ticket.server'
import { CreateTicketCommandHandler } from '../commands/create-ticket.command-handler'

Box.register({
  createTicketServer: ioc.asClass(CreateTicketServer).singleton(),
  createTicketController: ioc.asClass(CreateTicketController).singleton(),
  createTicketCommandHandler: ioc
    .asClass(CreateTicketCommandHandler)
    .singleton(),
})
