/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/shared'

import { LeaveTheQueueController } from '../api/leave-the-queue.controller'
import { LeaveTheQueueServer } from '../api/leave-the-queue.server'
import { LeaveTheQueueCommandHandler } from '../commands/leave-the-queue.command-handler'

Box.register({
  leaveTheQueueServer: ioc.asClass(LeaveTheQueueServer).singleton(),
  leaveTheQueueController: ioc.asClass(LeaveTheQueueController).singleton(),
  leaveTheQueueCommandHandler: ioc.asClass(LeaveTheQueueCommandHandler).singleton(),
})
