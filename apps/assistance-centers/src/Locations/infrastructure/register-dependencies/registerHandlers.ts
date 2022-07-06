/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { commandBus, eventBus, queryBus } from '@turnly/shared'

import { LocationsFactory } from '../factories/LocationsFactory'

/**
 * Location module
 */
queryBus.register(LocationsFactory.getQueryHandlers())
commandBus.register(LocationsFactory.getCommandHandlers())
eventBus.subscribe(LocationsFactory.getEventSubscribers())
