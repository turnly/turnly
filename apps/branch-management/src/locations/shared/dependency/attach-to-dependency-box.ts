/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/shared'

import { LocationsMapper } from '../infrastructure/persistence/mongo/entity-model-mappers/locations.mapper'
import { LocationsReadableRepo } from '../infrastructure/persistence/mongo/repositories/locations-readable.repo'
import { LocationsWritableRepo } from '../infrastructure/persistence/mongo/repositories/locations-writable.repo'

Box.register({
  locationsMapper: ioc.asClass(LocationsMapper).singleton(),
  locationsReadableRepo: ioc.asClass(LocationsReadableRepo).singleton(),
  locationsWritableRepo: ioc.asClass(LocationsWritableRepo).singleton(),
})
