/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { CreateDeviceCommandHandler } from './create-device.command-handler'
import { CreateDeviceController } from './create-device.controller'

Box.register({
  createDeviceController: ioc.asClass(CreateDeviceController).singleton(),
  createDeviceCommandHandler: ioc
    .asClass(CreateDeviceCommandHandler)
    .singleton(),
})
