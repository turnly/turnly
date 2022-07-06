/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { commandBus, eventBus, queryBus } from '@turnly/shared'

import { IntegrationsFactory } from '../factories/IntegrationsFactory'

/**
 * Integrations module
 */
queryBus.register(IntegrationsFactory.getQueryHandlers())
commandBus.register(IntegrationsFactory.getCommandHandlers())
eventBus.subscribe(IntegrationsFactory.getEventSubscribers())
