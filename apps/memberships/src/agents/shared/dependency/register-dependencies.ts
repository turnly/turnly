/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { commandBus, eventBus, queryBus } from '@turnly/shared'

import { AgentsModule } from '../../agents.module'

/**
 * Agents module
 */
queryBus.register(AgentsModule.getQueryHandlers())
commandBus.register(AgentsModule.getCommandHandlers())
eventBus.subscribe(AgentsModule.getEventSubscribers())
