/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { MarkTicketAsServedController } from '../api/mark-ticket-as-served.controller'
import { MarkTicketAsServedServer } from '../api/mark-ticket-as-served.server'
import { MarkTicketAsServedCommandHandler } from '../commands/mark-ticket-as-served.command-handler'

Box.register({
  markTicketAsServedServer: ioc.asClass(MarkTicketAsServedServer).singleton(),
  markTicketAsServedController: ioc
    .asClass(MarkTicketAsServedController)
    .singleton(),
  markTicketAsServedCommandHandler: ioc
    .asClass(MarkTicketAsServedCommandHandler)
    .singleton(),
})
