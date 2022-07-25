/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/shared'
import { OrganizationByIdQueryHandler } from 'Organizations/application/queries/OrganizationByIdQuery'
import { OrganizationBySubdomainQueryHandler } from 'Organizations/application/queries/OrganizationBySubdomainQuery'
import { OrganizationsMapper } from 'Organizations/infrastructure/persistence/mongo/entity-model-mappers/OrganizationsMapper'
import { OrganizationsReadableRepo } from 'Organizations/infrastructure/persistence/mongo/repositories/OrganizationsReadableRepo'

import { OrganizationsController } from '../api/controllers/OrganizationsController'
import { OrganizationsWritableRepo } from '../persistence/mongo/repositories/OrganizationsWritableRepo'

Box.register({
  organizationsMapper: ioc.asClass(OrganizationsMapper).singleton(),
  organizationsReadableRepo: ioc.asClass(OrganizationsReadableRepo).singleton(),
  organizationsWritableRepo: ioc.asClass(OrganizationsWritableRepo).singleton(),
  organizationsController: ioc.asClass(OrganizationsController).singleton(),
})

/**
 * Query handlers
 */
Box.register({
  organizationByIdQueryHandler: ioc
    .asClass(OrganizationByIdQueryHandler)
    .singleton(),
  organizationBySubdomainQueryHandler: ioc
    .asClass(OrganizationBySubdomainQueryHandler)
    .singleton(),
})
