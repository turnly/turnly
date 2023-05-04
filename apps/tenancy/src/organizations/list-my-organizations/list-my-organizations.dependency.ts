/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { ListMyOrganizationsController } from './list-my-organizations.controller'
import { ListMyOrganizationsQueryHandler } from './list-my-organizations.query-handler'
import { ListMyOrganizationsServer } from './list-my-organizations.server'

Box.register({
  listMyOrganizationsQueryHandler: ioc
    .asClass(ListMyOrganizationsQueryHandler)
    .singleton(),
  listMyOrganizationsServer: ioc.asClass(ListMyOrganizationsServer).singleton(),
  listMyOrganizationsController: ioc
    .asClass(ListMyOrganizationsController)
    .singleton(),
})
