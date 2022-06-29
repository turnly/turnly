import { Box, ioc } from '@turnly/shared'
import {
  OrganizationByIdQueryHandler,
  OrganizationBySubDomainQueryHandler,
} from 'Organizations/application/queries'
import { OrganizationsMapper } from 'Organizations/infrastructure/persistence/mongo/entity-model-mappers/OrganizationsMapper'
import { OrganizationsReadableRepo } from 'Organizations/infrastructure/persistence/mongo/repositories/OrganizationsReadableRepo'

import { OrganizationsController } from '../api/controllers/OrganizationsController'

Box.register({
  organizationsMapper: ioc.asClass(OrganizationsMapper).singleton(),
  organizationsReadableRepo: ioc.asClass(OrganizationsReadableRepo).singleton(),
  organizationsController: ioc.asClass(OrganizationsController).singleton(),
})

/**
 * Query handlers
 */
Box.register({
  organizationByIdQueryHandler: ioc
    .asClass(OrganizationByIdQueryHandler)
    .singleton(),
  organizationBySubDomainQueryHandler: ioc
    .asClass(OrganizationBySubDomainQueryHandler)
    .singleton(),
})
