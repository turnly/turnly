import { commandBus, eventBus, queryBus } from '@turnly/shared'

import { IntegrationFactory } from '../factories/IntegrationFactory'

/**
 * Integrations module
 */
queryBus.register(IntegrationFactory.getQueryHandlers())
commandBus.register(IntegrationFactory.getCommandHandlers())
eventBus.subscribe(IntegrationFactory.getEventSubscribers())
