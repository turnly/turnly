import { commandBus, eventBus, queryBus } from '@turnly/shared'

import { ServiceFactory } from '../factories/ServiceFactory'

/**
 * Service module
 */
queryBus.register(ServiceFactory.getQueryHandlers())
commandBus.register(ServiceFactory.getCommandHandlers())
eventBus.subscribe(ServiceFactory.getEventSubscribers())
