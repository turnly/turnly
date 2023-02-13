/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/shared'

import { GetOneLocationController } from '../api/GetOneLocationController'
import { GetOneLocationServer } from '../api/GetOneLocationServer'
import { GetOneLocationQueryHandler } from '../queries/GetOneLocationQueryHandler'

Box.register({
  getOneLocationServer: ioc.asClass(GetOneLocationServer).singleton(),
  getOneLocationController: ioc.asClass(GetOneLocationController).singleton(),
  getOneLocationQueryHandler: ioc
    .asClass(GetOneLocationQueryHandler)
    .singleton(),
})
