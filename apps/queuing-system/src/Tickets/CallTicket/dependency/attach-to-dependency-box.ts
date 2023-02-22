/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/shared'

import { CallTicketController } from '../api/CallTicketController'
import { CallTicketServer } from '../api/CallTicketServer'
import { CallTicketCommandHandler } from '../commands/CallTicketCommandHandler'

Box.register({
  callTicketServer: ioc.asClass(CallTicketServer).singleton(),
  callTicketController: ioc.asClass(CallTicketController).singleton(),
  callTicketCommandHandler: ioc.asClass(CallTicketCommandHandler).singleton(),
})
