/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { UpdateSignageDisplayCommandHandler } from './update-signage-display.command-handler'
import { UpdateSignageDisplayController } from './update-signage-display.controller'
import { UpdateSignageDisplayServer } from './update-signage-display.server'

Box.register({
  updateSignageDisplayController: ioc
    .asClass(UpdateSignageDisplayController)
    .singleton(),
  updateSignageDisplayCommandHandler: ioc
    .asClass(UpdateSignageDisplayCommandHandler)
    .singleton(),
  updateSignageDisplayServer: ioc
    .asClass(UpdateSignageDisplayServer)
    .singleton(),
})
