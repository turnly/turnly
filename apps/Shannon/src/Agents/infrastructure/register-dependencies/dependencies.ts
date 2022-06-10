import { Box, ioc } from '@turnly/shared'
import { AgentByIdQueryHandler } from 'Agents/application/queries/AgentByIdQuery'

import { AgentsController } from '../api/controllers/AgentsController'
import { AgentMapper } from '../persistence/mongo/entity-model-mappers/AgentMapper'
import { AgentReadableRepo } from '../persistence/mongo/repositories/AgentsReadableRepo'

Box.register({
  agentsMapper: ioc.asClass(AgentMapper).singleton(),
  agentsReadableRepo: ioc.asClass(AgentReadableRepo).singleton(),
  agentsController: ioc.asClass(AgentsController).singleton(),
})

/**
 * Query handlers
 */
Box.register({
  agentByIdQueryHandler: ioc.asClass(AgentByIdQueryHandler).singleton(),
})
