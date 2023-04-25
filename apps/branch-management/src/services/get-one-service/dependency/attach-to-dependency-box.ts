/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { GetOneServiceController } from '../api/get-one-service.controller'
import { GetOneServiceServer } from '../api/get-one-service.server'
import { GetOneServiceQueryHandler } from '../queries/get-one-service.query-handler'

Box.register({
  getOneServiceServer: ioc.asClass(GetOneServiceServer).singleton(),
  getOneServiceController: ioc.asClass(GetOneServiceController).singleton(),
  getOneServiceQueryHandler: ioc.asClass(GetOneServiceQueryHandler).singleton(),
})
