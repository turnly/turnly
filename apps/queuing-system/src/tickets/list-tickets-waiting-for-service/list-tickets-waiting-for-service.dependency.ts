/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { ListTicketsWaitingForServiceController } from './list-tickets-waiting-for-service.controller'
import { ListTicketsWaitingForServiceQueryHandler } from './list-tickets-waiting-for-service.query-handler'
import { ListTicketsWaitingForServiceServer } from './list-tickets-waiting-for-service.server'

Box.register({
  listTicketsWaitingForServiceServer: ioc
    .asClass(ListTicketsWaitingForServiceServer)
    .singleton(),
  listTicketsWaitingForServiceController: ioc
    .asClass(ListTicketsWaitingForServiceController)
    .singleton(),
  listTicketsWaitingForServiceQueryHandler: ioc
    .asClass(ListTicketsWaitingForServiceQueryHandler)
    .singleton(),
})
