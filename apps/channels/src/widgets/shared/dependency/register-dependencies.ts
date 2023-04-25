/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { commandBus, eventBus, queryBus } from '@turnly/shared'

import { WidgetsModule } from '../../widgets.module'

/**
 * Widgets module
 */
queryBus.register(WidgetsModule.getQueryHandlers())
commandBus.register(WidgetsModule.getCommandHandlers())
eventBus.subscribe(WidgetsModule.getEventSubscribers())
