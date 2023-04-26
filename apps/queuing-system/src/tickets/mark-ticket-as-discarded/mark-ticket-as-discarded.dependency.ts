/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { MarkTicketAsDiscardedCommandHandler } from './mark-ticket-as-discarded.command-handler'
import { MarkTicketAsDiscardedController } from './mark-ticket-as-discarded.controller'
import { MarkTicketAsDiscardedServer } from './mark-ticket-as-discarded.server'

Box.register({
  markTicketAsDiscardedServer: ioc
    .asClass(MarkTicketAsDiscardedServer)
    .singleton(),
  markTicketAsDiscardedController: ioc
    .asClass(MarkTicketAsDiscardedController)
    .singleton(),
  markTicketAsDiscardedCommandHandler: ioc
    .asClass(MarkTicketAsDiscardedCommandHandler)
    .singleton(),
})
