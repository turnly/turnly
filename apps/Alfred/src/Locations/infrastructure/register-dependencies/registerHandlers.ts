import { commandBus, eventBus, queryBus } from '@turnly/shared'

import { LocationsFactory } from '../factories/LocationsFactory'

/**
 * Location module
 */
queryBus.register(LocationsFactory.getQueryHandlers())
commandBus.register(LocationsFactory.getCommandHandlers())
eventBus.subscribe(LocationsFactory.getEventSubscribers())
