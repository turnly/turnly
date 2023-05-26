/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { GetLocationReadyForServingController } from './get-location-ready-for-serving.controller'
import { GetLocationReadyForServingQueryHandler } from './get-location-ready-for-serving.query-handler'
import { GetLocationReadyForServingServer } from './get-location-ready-for-serving.server'

Box.register({
  getLocationReadyForServingServer: ioc
    .asClass(GetLocationReadyForServingServer)
    .singleton(),
  getLocationReadyForServingController: ioc
    .asClass(GetLocationReadyForServingController)
    .singleton(),
  getLocationReadyForServingQueryHandler: ioc
    .asClass(GetLocationReadyForServingQueryHandler)
    .singleton(),
})
