/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { commandBus, eventBus, queryBus } from '@turnly/shared'

import { CustomersFactory } from '../factories/CustomersFactory'

/**
 * Customer module
 */
queryBus.register(CustomersFactory.getQueryHandlers())
commandBus.register(CustomersFactory.getCommandHandlers())
eventBus.subscribe(CustomersFactory.getEventSubscribers())
