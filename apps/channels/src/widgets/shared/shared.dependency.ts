/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { WidgetsMapper } from './infrastructure/mongo/widgets.mapper'
import { WidgetsReadableRepo } from './infrastructure/mongo/widgets-readable.repo'
import { WidgetsWritableRepo } from './infrastructure/mongo/widgets-writable.repo'

Box.register({
  widgetsMapper: ioc.asClass(WidgetsMapper).singleton(),
  widgetsReadableRepo: ioc.asClass(WidgetsReadableRepo).singleton(),
  widgetsWritableRepo: ioc.asClass(WidgetsWritableRepo).singleton(),
})
