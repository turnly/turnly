import { Box, ioc } from '@turnly/shared'
import {
  ServiceByIdQueryHandler,
  ServiceByLocationIdQueryHandler,
} from 'Services/application/queries'

import { ServicesController } from '../api/controllers/ServicesController'
import { ServiceMapper } from '../persistence/mongo/entity-model-mappers/ServiceMapper'

Box.register({
  servicesMapper: ioc.asClass(ServiceMapper).singleton(),
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
