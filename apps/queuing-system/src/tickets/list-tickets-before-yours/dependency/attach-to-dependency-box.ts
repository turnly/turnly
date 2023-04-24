/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/shared'

import { ListTicketsBeforeYoursController } from '../api/list-tickets-before-yours.controller'
import { ListTicketsBeforeYoursServer } from '../api/list-tickets-before-yours.server'
import { ListTicketsBeforeYoursQueryHandler } from '../queries/list-tickets-before-yours.query-handler'

Box.register({
  listTicketsBeforeYoursServer: ioc.asClass(ListTicketsBeforeYoursServer).singleton(),
  listTicketsBeforeYoursController: ioc
    .asClass(ListTicketsBeforeYoursController)
    .singleton(),
  listTicketsBeforeYoursQueryHandler: ioc
    .asClass(ListTicketsBeforeYoursQueryHandler)
    .singleton(),
})
