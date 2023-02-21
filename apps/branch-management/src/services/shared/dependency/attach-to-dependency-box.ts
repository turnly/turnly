/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/shared'

import { ServicesMapper } from '../infrastructure/persistence/mongo/entity-model-mappers/services.mapper'
import { ServicesReadableRepo } from '../infrastructure/persistence/mongo/repositories/services-readable.repo'
import { ServicesWritableRepo } from '../infrastructure/persistence/mongo/repositories/services-writable.repo'

Box.register({
  servicesMapper: ioc.asClass(ServicesMapper).singleton(),
  servicesReadableRepo: ioc.asClass(ServicesReadableRepo).singleton(),
  servicesWritableRepo: ioc.asClass(ServicesWritableRepo).singleton(),
})
