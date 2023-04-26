/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { ReturnTicketToQueueCommandHandler } from './return-ticket-to-queue.command-handler'
import { ReturnTicketToQueueController } from './return-ticket-to-queue.controller'
import { ReturnTicketToQueueServer } from './return-ticket-to-queue.server'

Box.register({
  returnTicketToQueueServer: ioc.asClass(ReturnTicketToQueueServer).singleton(),
  returnTicketToQueueController: ioc
    .asClass(ReturnTicketToQueueController)
    .singleton(),
  returnTicketToQueueCommandHandler: ioc
    .asClass(ReturnTicketToQueueCommandHandler)
    .singleton(),
})
