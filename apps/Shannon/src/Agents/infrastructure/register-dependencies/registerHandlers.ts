import { commandBus, eventBus, queryBus } from '@turnly/shared'

import { AgentsFactory } from '../factories/AgentsFactory'

/**
 * Agent module
 */
queryBus.register(AgentsFactory.getQueryHandlers())
commandBus.register(AgentsFactory.getCommandHandlers())
eventBus.subscribe(AgentsFactory.getEventSubscribers())
