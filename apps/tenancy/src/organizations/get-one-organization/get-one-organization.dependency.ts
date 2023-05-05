/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { GetOneOrganizationController } from './get-one-organization.controller'
import { GetOneOrganizationQueryHandler } from './get-one-organization.query-handler'
import { GetOneOrganizationServer } from './get-one-organization.server'

Box.register({
  getOneOrganizationQueryHandler: ioc
    .asClass(GetOneOrganizationQueryHandler)
    .singleton(),
  getOneOrganizationServer: ioc.asClass(GetOneOrganizationServer).singleton(),
  getOneOrganizationController: ioc
    .asClass(GetOneOrganizationController)
    .singleton(),
})
