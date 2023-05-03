/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { ListTicketsForSignageDisplaysController } from './list-tickets-for-signage-displays.controller'
import { ListTicketsForSignageDisplaysQueryHandler } from './list-tickets-for-signage-displays.query-handler'
import { ListTicketsForSignageDisplaysServer } from './list-tickets-for-signage-displays.server'

Box.register({
  listTicketsForSignageDisplaysServer: ioc
    .asClass(ListTicketsForSignageDisplaysServer)
    .singleton(),
  listTicketsForSignageDisplaysController: ioc
    .asClass(ListTicketsForSignageDisplaysController)
    .singleton(),
  listTicketsForSignageDisplaysQueryHandler: ioc
    .asClass(ListTicketsForSignageDisplaysQueryHandler)
    .singleton(),
})
