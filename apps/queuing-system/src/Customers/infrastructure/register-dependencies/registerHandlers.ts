/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { commandBus, eventBus, queryBus } from '@turnly/shared'

import { CustomerFactory } from '../factories/CustomerFactory'

/**
 * Customer module
 */
queryBus.register(CustomerFactory.getQueryHandlers())
commandBus.register(CustomerFactory.getCommandHandlers())
eventBus.subscribe(CustomerFactory.getEventSubscribers())
