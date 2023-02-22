/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/shared'

import { DiscardTicketController } from '../api/DiscardTicketController'
import { DiscardTicketServer } from '../api/DiscardTicketServer'
import { DiscardTicketCommandHandler } from '../commands/DiscardTicketCommandHandler'

Box.register({
  discardTicketServer: ioc.asClass(DiscardTicketServer).singleton(),
  discardTicketController: ioc.asClass(DiscardTicketController).singleton(),
  discardTicketCommandHandler: ioc
    .asClass(DiscardTicketCommandHandler)
    .singleton(),
})
