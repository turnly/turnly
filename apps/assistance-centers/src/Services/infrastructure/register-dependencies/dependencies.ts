/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/shared'
import { ServiceByIdQueryHandler } from 'Services/application/queries/ServiceByIdQuery'
import { ServicesByLocationQueryHandler } from 'Services/application/queries/ServicesByLocationQuery'

import { ServicesController } from '../api/controllers/ServicesController'
import { ServicesMapper } from '../persistence/mongo/entity-model-mappers/ServicesMapper'
import { ServicesReadableRepo } from '../persistence/mongo/repositories/ServicesReadableRepo'
import { ServicesWritableRepo } from '../persistence/mongo/repositories/ServicesWritableRepo'

Box.register({
  servicesMapper: ioc.asClass(ServicesMapper).singleton(),
  servicesReadableRepo: ioc.asClass(ServicesReadableRepo).singleton(),
  servicesWritableRepo: ioc.asClass(ServicesWritableRepo).singleton(),
  servicesController: ioc.asClass(ServicesController).singleton(),
})

/**
 * Query handlers
 */
Box.register({
  serviceByIdQueryHandler: ioc.asClass(ServiceByIdQueryHandler).singleton(),
  serviceByLocationIdQueryHandler: ioc
    .asClass(ServicesByLocationQueryHandler)
    .singleton(),
})
