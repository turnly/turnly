/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { ListSignageDisplaysController } from './list-signage-displays.controller'
import { ListSignageDisplaysQueryHandler } from './list-signage-displays.query-handler'
import { ListSignageDisplaysServer } from './list-signage-displays.server'

Box.register({
  listSignageDisplaysServer: ioc.asClass(ListSignageDisplaysServer).singleton(),
  listSignageDisplaysController: ioc
    .asClass(ListSignageDisplaysController)
    .singleton(),
  listSignageDisplaysQueryHandler: ioc
    .asClass(ListSignageDisplaysQueryHandler)
    .singleton(),
})
