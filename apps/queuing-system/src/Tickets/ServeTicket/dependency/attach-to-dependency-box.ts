/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/shared'

import { ServeTicketController } from '../api/ServeTicketController'
import { ServeTicketServer } from '../api/ServeTicketServer'
import { ServeTicketCommandHandler } from '../commands/ServeTicketCommandHandler'

Box.register({
  serveTicketServer: ioc.asClass(ServeTicketServer).singleton(),
  serveTicketController: ioc.asClass(ServeTicketController).singleton(),
  serveTicketCommandHandler: ioc.asClass(ServeTicketCommandHandler).singleton(),
})
