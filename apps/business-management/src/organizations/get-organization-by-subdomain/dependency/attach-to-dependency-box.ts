/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/shared'

import { GetOrganizationBySubdomainController } from '../api/get-organization-by-subdomain.controller'
import { GetOrganizationBySubdomainServer } from '../api/get-organization-by-subdomain.server'
import { GetOrganizationBySubdomainQueryHandler } from '../queries/get-organization-by-subdomain.query-handler'

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
