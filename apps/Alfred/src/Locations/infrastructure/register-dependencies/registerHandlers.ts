import { commandBus, eventBus, queryBus } from '@turnly/shared'

import { LocationFactory } from '../factories/LocationFactory'

/**
 * Location module
 */
queryBus.register(LocationFactory.getQueryHandlers())
commandBus.register(LocationFactory.getCommandHandlers())
eventBus.subscribe(LocationFactory.getEventSubscribers())
