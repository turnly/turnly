/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/shared'

import { ListServicesOfOneLocationController } from '../api/ListServicesOfOneLocationController'
import { ListServicesOfOneLocationServer } from '../api/ListServicesOfOneLocationServer'
import { ListServicesOfOneLocationQueryHandler } from '../queries/ListServicesOfOneLocationQueryHandler'

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
