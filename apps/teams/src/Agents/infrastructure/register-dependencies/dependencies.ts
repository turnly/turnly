/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/shared'
import { AgentByIdQueryHandler } from 'Agents/application/queries/AgentByIdQuery'

import { AgentsController } from '../api/controllers/AgentsController'
import { AgentsMapper } from '../persistence/mongo/entity-model-mappers/AgentsMapper'
import { AgentsReadableRepo } from '../persistence/mongo/repositories/AgentsReadableRepo'
import { AgentsWritableRepo } from '../persistence/mongo/repositories/AgentsWritableRepo'

Box.register({
  agentsMapper: ioc.asClass(AgentsMapper).singleton(),
  agentsReadableRepo: ioc.asClass(AgentsReadableRepo).singleton(),
  agentsWritableRepo: ioc.asClass(AgentsWritableRepo).singleton(),
  agentsController: ioc.asClass(AgentsController).singleton(),
})

/**
 * Query handlers
 */
Box.register({
  agentByIdQueryHandler: ioc.asClass(AgentByIdQueryHandler).singleton(),
})
