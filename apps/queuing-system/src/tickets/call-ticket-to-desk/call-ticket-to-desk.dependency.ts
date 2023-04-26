/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { CallTicketToDeskCommandHandler } from './call-ticket-to-desk.command-handler'
import { CallTicketToDeskController } from './call-ticket-to-desk.controller'
import { CallTicketToDeskServer } from './call-ticket-to-desk.server'

Box.register({
  callTicketToDeskServer: ioc.asClass(CallTicketToDeskServer).singleton(),
  callTicketToDeskController: ioc
    .asClass(CallTicketToDeskController)
    .singleton(),
  callTicketToDeskCommandHandler: ioc
    .asClass(CallTicketToDeskCommandHandler)
    .singleton(),
})
