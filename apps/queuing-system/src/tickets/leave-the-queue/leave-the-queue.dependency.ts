/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { LeaveTheQueueCommandHandler } from './leave-the-queue.command-handler'
import { LeaveTheQueueController } from './leave-the-queue.controller'
import { LeaveTheQueueServer } from './leave-the-queue.server'

Box.register({
  leaveTheQueueServer: ioc.asClass(LeaveTheQueueServer).singleton(),
  leaveTheQueueController: ioc.asClass(LeaveTheQueueController).singleton(),
  leaveTheQueueCommandHandler: ioc
    .asClass(LeaveTheQueueCommandHandler)
    .singleton(),
})
