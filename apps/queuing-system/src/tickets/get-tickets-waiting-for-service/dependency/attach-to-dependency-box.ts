/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/shared'

import { GetTicketsWaitingForServiceController } from '../api/get-tickets-waiting-for-service.controller'
import { GetTicketsWaitingForServiceServer } from '../api/get-tickets-waiting-for-service.server'
import { GetTicketsWaitingForServiceQueryHandler } from '../queries/get-tickets-waiting-for-service.query-handler'

Box.register({
  getTicketsWaitingForServiceServer: ioc
    .asClass(GetTicketsWaitingForServiceServer)
    .singleton(),
  getTicketsWaitingForServiceController: ioc
    .asClass(GetTicketsWaitingForServiceController)
    .singleton(),
  getTicketsWaitingForServiceQueryHandler: ioc
    .asClass(GetTicketsWaitingForServiceQueryHandler)
    .singleton(),
})
