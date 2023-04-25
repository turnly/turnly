/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/shared'

import { GetOneOrganizationQueryHandler } from '../application/queries'
import { OrganizationsMapper } from '../infrastructure/persistence/mongo/entity-model-mappers/organizations.mapper'
import { OrganizationsReadableRepo } from '../infrastructure/persistence/mongo/repositories/organizations-readable.repo'
import { OrganizationsWritableRepo } from '../infrastructure/persistence/mongo/repositories/organizations-writable.repo'

Box.register({
  organizationsMapper: ioc.asClass(OrganizationsMapper).singleton(),
  organizationsReadableRepo: ioc.asClass(OrganizationsReadableRepo).singleton(),
  organizationsWritableRepo: ioc.asClass(OrganizationsWritableRepo).singleton(),
  getOneOrganizationQueryHandler: ioc
    .asClass(GetOneOrganizationQueryHandler)
    .singleton(),
})
