/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { MarkTicketAsServedCommandHandler } from './mark-ticket-as-served.command-handler'
import { MarkTicketAsServedController } from './mark-ticket-as-served.controller'
import { MarkTicketAsServedServer } from './mark-ticket-as-served.server'

Box.register({
  markTicketAsServedServer: ioc.asClass(MarkTicketAsServedServer).singleton(),
  markTicketAsServedController: ioc
    .asClass(MarkTicketAsServedController)
    .singleton(),
  markTicketAsServedCommandHandler: ioc
    .asClass(MarkTicketAsServedCommandHandler)
    .singleton(),
})
