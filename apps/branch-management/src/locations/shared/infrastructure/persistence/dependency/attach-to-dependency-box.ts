/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/shared'

import { LocationsMapper } from '../mongo/entity-model-mappers/locations.mapper'
import { LocationsReadableRepo } from '../mongo/repositories/locations-readable.repo'
import { LocationsWritableRepo } from '../mongo/repositories/locations-writable.repo'

Box.register({
  locationsMapper: ioc.asClass(LocationsMapper).singleton(),
  locationsReadableRepo: ioc.asClass(LocationsReadableRepo).singleton(),
  locationsWritableRepo: ioc.asClass(LocationsWritableRepo).singleton(),
})
