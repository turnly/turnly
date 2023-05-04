/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { GetOrganizationBySubdomainController } from './get-organization-by-subdomain.controller'
import { GetOrganizationBySubdomainQueryHandler } from './get-organization-by-subdomain.query-handler'
import { GetOrganizationBySubdomainServer } from './get-organization-by-subdomain.server'

Box.register({
  getOrganizationBySubdomainServer: ioc
    .asClass(GetOrganizationBySubdomainServer)
    .singleton(),
  getOrganizationBySubdomainController: ioc
    .asClass(GetOrganizationBySubdomainController)
    .singleton(),
  getOrganizationBySubdomainQueryHandler: ioc
    .asClass(GetOrganizationBySubdomainQueryHandler)
    .singleton(),
})
