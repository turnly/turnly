/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { ListServicesOfOneLocationController } from './list-services-of-one-location.controller'
import { ListServicesOfOneLocationQueryHandler } from './list-services-of-one-location.query-handler'
import { ListServicesOfOneLocationServer } from './list-services-of-one-location.server'

Box.register({
  listServicesOfOneLocationServer: ioc
    .asClass(ListServicesOfOneLocationServer)
    .singleton(),
  listServicesOfOneLocationController: ioc
    .asClass(ListServicesOfOneLocationController)
    .singleton(),
  listServicesOfOneLocationQueryHandler: ioc
    .asClass(ListServicesOfOneLocationQueryHandler)
    .singleton(),
})
