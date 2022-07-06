/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { commandBus, eventBus, queryBus } from '@turnly/shared'

import { AgentsFactory } from '../factories/AgentsFactory'

/**
 * Agent module
 */
queryBus.register(AgentsFactory.getQueryHandlers())
commandBus.register(AgentsFactory.getCommandHandlers())
eventBus.subscribe(AgentsFactory.getEventSubscribers())
