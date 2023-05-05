/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { OrganizationsMapper } from './infrastructure/mongo/organizations.mapper'
import { OrganizationsReadableRepo } from './infrastructure/mongo/organizations-readable.repo'
import { OrganizationsWritableRepo } from './infrastructure/mongo/organizations-writable.repo'

Box.register({
  organizationsMapper: ioc.asClass(OrganizationsMapper).singleton(),
  organizationsReadableRepo: ioc.asClass(OrganizationsReadableRepo).singleton(),
  organizationsWritableRepo: ioc.asClass(OrganizationsWritableRepo).singleton(),
})
