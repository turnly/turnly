/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { GetAgentByUserIdController } from './get-agent-by-user-id.controller'
import { GetAgentByUserIdQueryHandler } from './get-agent-by-user-id.query-handler'
import { GetAgentByUserIdServer } from './get-agent-by-user-id.server'

Box.register({
  getAgentByUserIdServer: ioc.asClass(GetAgentByUserIdServer).singleton(),
  getAgentByUserIdController: ioc
    .asClass(GetAgentByUserIdController)
    .singleton(),
  getAgentByUserIdQueryHandler: ioc
    .asClass(GetAgentByUserIdQueryHandler)
    .singleton(),
})
