/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/shared'

import { ServicesMapper } from '../mongo/entity-model-mappers/ServicesMapper'
import { ServicesReadableRepo } from '../mongo/repositories/ServicesReadableRepo'
import { ServicesWritableRepo } from '../mongo/repositories/ServicesWritableRepo'

Box.register({
  servicesMapper: ioc.asClass(ServicesMapper).singleton(),
  servicesReadableRepo: ioc.asClass(ServicesReadableRepo).singleton(),
  servicesWritableRepo: ioc.asClass(ServicesWritableRepo).singleton(),
})
