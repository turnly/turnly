/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/shared'

import { GetServicesOfOneLocationController } from '../api/GetServicesOfOneLocationController'
import { GetServicesOfOneLocationServer } from '../api/GetServicesOfOneLocationServer'
import { GetServicesOfOneLocationQueryHandler } from '../queries/GetServicesOfOneLocationQueryHandler'

Box.register({
  getServicesOfOneLocationServer: ioc
    .asClass(GetServicesOfOneLocationServer)
    .singleton(),
  getServicesOfOneLocationController: ioc
    .asClass(GetServicesOfOneLocationController)
    .singleton(),
  getServicesOfOneLocationQueryHandler: ioc
    .asClass(GetServicesOfOneLocationQueryHandler)
    .singleton(),
})
