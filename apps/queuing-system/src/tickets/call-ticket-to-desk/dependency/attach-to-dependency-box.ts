/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/shared'

import { CallTicketToDeskController } from '../api/call-ticket-to-desk.controller'
import { CallTicketToDeskServer } from '../api/call-ticket-to-desk.server'
import { CallTicketToDeskCommandHandler } from '../commands/call-ticket-to-desk.command-handler'

Box.register({
  callTicketToDeskServer: ioc.asClass(CallTicketToDeskServer).singleton(),
  callTicketToDeskController: ioc.asClass(CallTicketToDeskController).singleton(),
  callTicketToDeskCommandHandler: ioc.asClass(CallTicketToDeskCommandHandler).singleton(),
})
