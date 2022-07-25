/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { commandBus, eventBus, queryBus } from '@turnly/shared'

import { IntegrationsFactory } from '../factories/IntegrationsFactory'

/**
 * Integrations module
 */
queryBus.register(IntegrationsFactory.getQueryHandlers())
commandBus.register(IntegrationsFactory.getCommandHandlers())
eventBus.subscribe(IntegrationsFactory.getEventSubscribers())
