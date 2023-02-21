/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/shared'

import { TicketsBeforeYoursController } from '../api/TicketsBeforeYoursController'
import { TicketsBeforeYoursServer } from '../api/TicketsBeforeYoursServer'
import { TicketsBeforeYoursQueryHandler } from '../queries/TicketsBeforeYoursQueryHandler'

Box.register({
  ticketsBeforeYoursServer: ioc.asClass(TicketsBeforeYoursServer).singleton(),
  ticketsBeforeYoursController: ioc
    .asClass(TicketsBeforeYoursController)
    .singleton(),
  ticketsBeforeYoursQueryHandler: ioc
    .asClass(TicketsBeforeYoursQueryHandler)
    .singleton(),
})
