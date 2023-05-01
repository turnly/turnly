/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { GetOneDeviceByCriteriaController } from './get-one-device-by-criteria.controller'
import { GetOneDeviceByCriteriaQueryHandler } from './get-one-device-by-criteria.query-handler'

Box.register({
  getOneDeviceByCriteriaQueryHandler: ioc
    .asClass(GetOneDeviceByCriteriaQueryHandler)
    .singleton(),
  getOneDeviceByCriteriaController: ioc
    .asClass(GetOneDeviceByCriteriaController)
    .singleton(),
})
