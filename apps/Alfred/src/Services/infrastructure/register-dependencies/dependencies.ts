import { Box, ioc } from '@turnly/shared'
import {
  ServiceByIdQueryHandler,
  ServiceByLocationIdQueryHandler,
} from 'Services/application/queries'

import { ServicesController } from '../api/controllers/ServicesController'
import { ServiceMapper } from '../persistence/mongo/entity-model-mappers/ServiceMapper'
import { ServiceReadableRepo } from '../persistence/mongo/repositories/ServicesReadableRepo'

Box.register({
  servicesMapper: ioc.asClass(ServiceMapper).singleton(),
  servicesReadableRepo: ioc.asClass(ServiceReadableRepo).singleton(),
  servicesController: ioc.asClass(ServicesController).singleton(),
})

/**
 * Query handlers
 */
Box.register({
  serviceByIdQueryHandler: ioc.asClass(ServiceByIdQueryHandler).singleton(),
  serviceByLocationIdQueryHandler: ioc
    .asClass(ServiceByLocationIdQueryHandler)
    .singleton(),
})
