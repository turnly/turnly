/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { commandBus, eventBus, queryBus } from '@turnly/shared'

import { AgentsFactory } from '../factories/AgentsFactory'

/**
 * Agent module
 */
queryBus.register(AgentsFactory.getQueryHandlers())
commandBus.register(AgentsFactory.getCommandHandlers())
eventBus.subscribe(AgentsFactory.getEventSubscribers())
