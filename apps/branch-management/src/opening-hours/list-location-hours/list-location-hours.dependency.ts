/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { ListLocationHoursController } from './list-location-hours.controller'
import { ListLocationHoursQueryHandler } from './list-location-hours.query-handler'
import { ListLocationHoursServer } from './list-location-hours.server'

Box.register({
  listLocationHoursServer: ioc.asClass(ListLocationHoursServer).singleton(),
  listLocationHoursController: ioc
    .asClass(ListLocationHoursController)
    .singleton(),
  listLocationHoursQueryHandler: ioc
    .asClass(ListLocationHoursQueryHandler)
    .singleton(),
})
