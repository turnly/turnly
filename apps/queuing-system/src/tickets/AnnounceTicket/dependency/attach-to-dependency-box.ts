/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/shared'

import { AnnounceTicketController } from '../api/AnnounceTicketController'
import { AnnounceTicketServer } from '../api/AnnounceTicketServer'
import { AnnounceTicketCommandHandler } from '../commands/AnnounceTicketCommandHandler'

Box.register({
  announceTicketServer: ioc.asClass(AnnounceTicketServer).singleton(),
  announceTicketController: ioc.asClass(AnnounceTicketController).singleton(),
  announceTicketCommandHandler: ioc
    .asClass(AnnounceTicketCommandHandler)
    .singleton(),
})
