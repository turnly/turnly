/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/shared'

import { CreateTicketController } from '../api/CreateTicketController'
import { CreateTicketServer } from '../api/CreateTicketServer'
import { CreateTicketCommandHandler } from '../commands/CreateTicketCommandHandler'

Box.register({
  createTicketServer: ioc.asClass(CreateTicketServer).singleton(),
  createTicketController: ioc.asClass(CreateTicketController).singleton(),
  createTicketCommandHandler: ioc
    .asClass(CreateTicketCommandHandler)
    .singleton(),
})
