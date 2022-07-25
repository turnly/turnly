/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { commandBus, eventBus, queryBus } from '@turnly/shared'

import { CustomersFactory } from '../factories/CustomersFactory'

/**
 * Customer module
 */
queryBus.register(CustomersFactory.getQueryHandlers())
commandBus.register(CustomersFactory.getCommandHandlers())
eventBus.subscribe(CustomersFactory.getEventSubscribers())
