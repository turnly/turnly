/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { commandBus, eventBus, queryBus } from '@turnly/core'

import { DevicesModule } from '../devices.module'

/**
 * Devices module
 */
queryBus.register(DevicesModule.getQueryHandlers())
commandBus.register(DevicesModule.getCommandHandlers())
eventBus.subscribe(DevicesModule.getEventSubscribers())
