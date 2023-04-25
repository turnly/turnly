/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/shared'

import { GetOneOrganizationController } from '../api/get-one-organization.controller'
import { GetOneOrganizationServer } from '../api/get-one-organization.server'

Box.register({
  getOneOrganizationServer: ioc.asClass(GetOneOrganizationServer).singleton(),
  getOneOrganizationController: ioc
    .asClass(GetOneOrganizationController)
    .singleton(),
})
