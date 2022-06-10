import { queryBus } from '@turnly/shared'

import { AgentFactory } from '../factories/AgentFactory'

/**
 * Agent module
 */
queryBus.register(AgentFactory.getQueryHandlers())
