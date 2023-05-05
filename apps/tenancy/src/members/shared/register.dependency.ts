/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { commandBus, eventBus, queryBus } from '@turnly/core'

import { MembersModule } from '../members.module'

/**
 * Members module
 */
queryBus.register(MembersModule.getQueryHandlers())
commandBus.register(MembersModule.getCommandHandlers())
eventBus.subscribe(MembersModule.getEventSubscribers())
