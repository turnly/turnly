/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/shared'

import { ListTicketsWaitingForServiceController } from '../api/list-tickets-waiting-for-service.controller'
import { ListTicketsWaitingForServiceServer } from '../api/list-tickets-waiting-for-service.server'
import { ListTicketsWaitingForServiceQueryHandler } from '../queries/list-tickets-waiting-for-service.query-handler'

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
