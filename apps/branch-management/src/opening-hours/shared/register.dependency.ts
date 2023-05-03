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
import { commandBus, eventBus, queryBus } from '@turnly/core'

import { OpeningHoursModule } from '../opening-hours.module'

// /**
//  * Opening Hour module
//  */
queryBus.register(OpeningHoursModule.getQueryHandlers())
commandBus.register(OpeningHoursModule.getCommandHandlers())
eventBus.subscribe(OpeningHoursModule.getEventSubscribers())
