/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { LocationsMapper } from './infrastructure/mongo/locations.mapper'
import { LocationsReadableRepo } from './infrastructure/mongo/locations-readable.repo'
import { LocationsWritableRepo } from './infrastructure/mongo/locations-writable.repo'

Box.register({
  locationsMapper: ioc.asClass(LocationsMapper).singleton(),
  locationsReadableRepo: ioc.asClass(LocationsReadableRepo).singleton(),
  locationsWritableRepo: ioc.asClass(LocationsWritableRepo).singleton(),
})
