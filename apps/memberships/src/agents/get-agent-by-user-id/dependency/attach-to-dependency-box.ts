/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/shared'

import { GetAgentByUserIdController } from '../api/get-agent-by-user-id.controller'
import { GetAgentByUserIdServer } from '../api/get-agent-by-user-id.server'
import { GetAgentByUserIdQueryHandler } from '../queries/get-agent-by-user-id.query-handler'

Box.register({
  getAgentByUserIdServer: ioc.asClass(GetAgentByUserIdServer).singleton(),
  getAgentByUserIdController: ioc
    .asClass(GetAgentByUserIdController)
    .singleton(),
  getAgentByUserIdQueryHandler: ioc
    .asClass(GetAgentByUserIdQueryHandler)
    .singleton(),
})
