/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { commandBus, eventBus, queryBus } from '@turnly/core'

import { AccessTokensModule } from '../access-tokens.module'

/**
 * AccessTokens module
 */
queryBus.register(AccessTokensModule.getQueryHandlers())
commandBus.register(AccessTokensModule.getCommandHandlers())
eventBus.subscribe(AccessTokensModule.getEventSubscribers())
