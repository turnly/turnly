/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { GetOneLocationController } from '../api/get-one-location.controller'
import { GetOneLocationServer } from '../api/get-one-location.server'
import { GetOneLocationQueryHandler } from '../queries/get-one-location.query-handler'

Box.register({
  getOneLocationServer: ioc.asClass(GetOneLocationServer).singleton(),
  getOneLocationController: ioc.asClass(GetOneLocationController).singleton(),
  getOneLocationQueryHandler: ioc
    .asClass(GetOneLocationQueryHandler)
    .singleton(),
})
