/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/shared'

import { GetOneIntegrationController } from '../api/get-one-integration.controller'
import { GetOneIntegrationServer } from '../api/get-one-integration.server'

Box.register({
  getOneIntegrationServer: ioc.asClass(GetOneIntegrationServer).singleton(),
  getOneIntegrationController: ioc
    .asClass(GetOneIntegrationController)
    .singleton(),
})
