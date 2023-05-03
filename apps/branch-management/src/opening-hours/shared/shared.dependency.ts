/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { OpeningHoursMapper } from './infrastructure/mongo/opening-hours.mapper'
import { OpeningHoursReadableRepo } from './infrastructure/mongo/opening-hours-readable.repo'
import { OpeningHoursWritableRepo } from './infrastructure/mongo/opening-hours-writable.repo'

Box.register({
  openingHoursMapper: ioc.asClass(OpeningHoursMapper).singleton(),
  openingHoursReadableRepo: ioc.asClass(OpeningHoursReadableRepo).singleton(),
  openingHoursWritableRepo: ioc.asClass(OpeningHoursWritableRepo).singleton(),
})
