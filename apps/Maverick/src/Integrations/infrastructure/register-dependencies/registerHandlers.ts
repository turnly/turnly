import { commandBus, eventBus, queryBus } from '@turnly/shared'

import { IntegrationsFactory } from '../factories/IntegrationsFactory'

/**
 * Integrations module
 */
queryBus.register(IntegrationsFactory.getQueryHandlers())
commandBus.register(IntegrationsFactory.getCommandHandlers())
eventBus.subscribe(IntegrationsFactory.getEventSubscribers())
