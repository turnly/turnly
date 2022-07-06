/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { commandBus, eventBus, queryBus } from '@turnly/shared'

import { ServicesFactory } from '../factories/ServicesFactory'

/**
 * Service module
 */
queryBus.register(ServicesFactory.getQueryHandlers())
commandBus.register(ServicesFactory.getCommandHandlers())
eventBus.subscribe(ServicesFactory.getEventSubscribers())
