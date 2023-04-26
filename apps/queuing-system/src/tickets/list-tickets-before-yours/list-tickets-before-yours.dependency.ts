/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { ListTicketsBeforeYoursController } from './list-tickets-before-yours.controller'
import { ListTicketsBeforeYoursQueryHandler } from './list-tickets-before-yours.query-handler'
import { ListTicketsBeforeYoursServer } from './list-tickets-before-yours.server'

Box.register({
  listTicketsBeforeYoursServer: ioc
    .asClass(ListTicketsBeforeYoursServer)
    .singleton(),
  listTicketsBeforeYoursController: ioc
    .asClass(ListTicketsBeforeYoursController)
    .singleton(),
  listTicketsBeforeYoursQueryHandler: ioc
    .asClass(ListTicketsBeforeYoursQueryHandler)
    .singleton(),
})
