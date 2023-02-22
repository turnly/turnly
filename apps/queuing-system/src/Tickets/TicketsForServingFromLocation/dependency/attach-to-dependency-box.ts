/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/shared'

import { TicketsForServingFromLocationController } from '../api/TicketsForServingFromLocationController'
import { TicketsForServingFromLocationServer } from '../api/TicketsForServingFromLocationServer'
import { TicketsForServingFromLocationQueryHandler } from '../queries/TicketsForServingFromLocationQueryHandler'

Box.register({
  ticketsForServingFromLocationServer: ioc
    .asClass(TicketsForServingFromLocationServer)
    .singleton(),
  ticketsForServingFromLocationController: ioc
    .asClass(TicketsForServingFromLocationController)
    .singleton(),
  ticketsForServingFromLocationQueryHandler: ioc
    .asClass(TicketsForServingFromLocationQueryHandler)
    .singleton(),
})
