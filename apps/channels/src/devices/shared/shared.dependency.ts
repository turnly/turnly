/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { DevicesMapper } from './infrastructure/mongo/devices.mapper'
import { DevicesReadableRepo } from './infrastructure/mongo/devices-readable.repo'
import { DevicesWritableRepo } from './infrastructure/mongo/devices-writable.repo'

Box.register({
  devicesMapper: ioc.asClass(DevicesMapper).singleton(),
  devicesReadableRepo: ioc.asClass(DevicesReadableRepo).singleton(),
  devicesWritableRepo: ioc.asClass(DevicesWritableRepo).singleton(),
})
