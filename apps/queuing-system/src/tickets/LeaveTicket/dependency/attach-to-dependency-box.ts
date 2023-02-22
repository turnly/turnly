/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/shared'

import { LeaveTicketController } from '../api/LeaveTicketController'
import { LeaveTicketServer } from '../api/LeaveTicketServer'
import { LeaveTicketCommandHandler } from '../commands/LeaveTicketCommandHandler'

Box.register({
  leaveTicketServer: ioc.asClass(LeaveTicketServer).singleton(),
  leaveTicketController: ioc.asClass(LeaveTicketController).singleton(),
  leaveTicketCommandHandler: ioc.asClass(LeaveTicketCommandHandler).singleton(),
})
