import { commandBus, eventBus, queryBus } from '@turnly/shared'

import { ServicesFactory } from '../factories/ServicesFactory'

/**
 * Service module
 */
queryBus.register(ServicesFactory.getQueryHandlers())
commandBus.register(ServicesFactory.getCommandHandlers())
eventBus.subscribe(ServicesFactory.getEventSubscribers())
