import { commandBus, eventBus, queryBus } from '@turnly/shared'

import { CustomerFactory } from '../factories/CustomerFactory'

/**
 * Customer module
 */
queryBus.register(CustomerFactory.getQueryHandlers())
commandBus.register(CustomerFactory.getCommandHandlers())
eventBus.subscribe(CustomerFactory.getEventSubscribers())
