import { commandBus, eventBus, queryBus } from '@turnly/shared'

import { AgentFactory } from '../factories/AgentFactory'

/**
 * Agent module
 */
queryBus.register(AgentFactory.getQueryHandlers())
commandBus.register(AgentFactory.getCommandHandlers())
eventBus.subscribe(AgentFactory.getEventSubscribers())
