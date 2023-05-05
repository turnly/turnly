/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { FeaturesMapper } from './infrastructure/mongo/features.mapper'
import { FeaturesReadableRepo } from './infrastructure/mongo/features-readable.repo'
import { FeaturesWritableRepo } from './infrastructure/mongo/features-writable.repo'

Box.register({
  featuresMapper: ioc.asClass(FeaturesMapper).singleton(),
  featuresReadableRepo: ioc.asClass(FeaturesReadableRepo).singleton(),
  featuresWritableRepo: ioc.asClass(FeaturesWritableRepo).singleton(),
})
