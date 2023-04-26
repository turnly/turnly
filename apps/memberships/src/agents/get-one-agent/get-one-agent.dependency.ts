/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { GetOneAgentController } from './get-one-agent.controller'
import { GetOneAgentServer } from './get-one-agent.server'

Box.register({
  getOneAgentServer: ioc.asClass(GetOneAgentServer).singleton(),
  getOneAgentController: ioc.asClass(GetOneAgentController).singleton(),
})