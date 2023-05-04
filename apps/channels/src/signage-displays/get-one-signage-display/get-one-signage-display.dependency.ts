/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { GetOneSignageDisplayController } from './get-one-signage-display.controller'
import { GetOneSignageDisplayQueryHandler } from './get-one-signage-display.query-handler'
import { GetOneSignageDisplayServer } from './get-one-signage-display.server'

Box.register({
  getOneSignageDisplayServer: ioc
    .asClass(GetOneSignageDisplayServer)
    .singleton(),
  getOneSignageDisplayController: ioc
    .asClass(GetOneSignageDisplayController)
    .singleton(),
  getOneSignageDisplayQueryHandler: ioc
    .asClass(GetOneSignageDisplayQueryHandler)
    .singleton(),
})
