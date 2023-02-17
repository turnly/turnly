/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/shared'

import { CreateTicketReadingDBController } from '../api/CreateTicketReadingDBController'
import { CreateTicketReadingDBServer } from '../api/CreateTicketReadingDBServer'
import { CreateTicketReadingDBCommandHandler } from '../commands/CreateTicketReadingDBCommandHandler'

Box.register({
  createTicketReadingDBServer: ioc
    .asClass(CreateTicketReadingDBServer)
    .singleton(),
  createTicketReadingDBController: ioc
    .asClass(CreateTicketReadingDBController)
    .singleton(),
  createTicketReadingDBCommandHandler: ioc
    .asClass(CreateTicketReadingDBCommandHandler)
    .singleton(),
})
