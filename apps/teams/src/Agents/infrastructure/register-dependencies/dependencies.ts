/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
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
