/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { commandBus, eventBus, queryBus } from '@turnly/core'

import { SignageDisplaysModule } from '../signage-displays.module'

/**
 * SignageDisplays module
 */
queryBus.register(SignageDisplaysModule.getQueryHandlers())
commandBus.register(SignageDisplaysModule.getCommandHandlers())
eventBus.subscribe(SignageDisplaysModule.getEventSubscribers())
