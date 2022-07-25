/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { commandBus, eventBus, queryBus } from '@turnly/shared'

import { ServicesFactory } from '../factories/ServicesFactory'

/**
 * Service module
 */
queryBus.register(ServicesFactory.getQueryHandlers())
commandBus.register(ServicesFactory.getCommandHandlers())
eventBus.subscribe(ServicesFactory.getEventSubscribers())
