/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */

/**
 * Handlers
 *
 * @description This file is used to register handlers to the bus.
 */
import { commandBus, eventBus, queryBus } from '@turnly/shared'

import { CustomersModule } from '../../../CustomersModule'

/**
 * Customer module
 */
queryBus.register(CustomersModule.getQueryHandlers())
commandBus.register(CustomersModule.getCommandHandlers())
eventBus.subscribe(CustomersModule.getEventSubscribers())
