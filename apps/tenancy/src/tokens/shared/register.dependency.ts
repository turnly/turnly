/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { commandBus, eventBus, queryBus } from '@turnly/core'

import { TokensModule } from '../tokens.module'

/**
 * Tokens module
 */
queryBus.register(TokensModule.getQueryHandlers())
commandBus.register(TokensModule.getCommandHandlers())
eventBus.subscribe(TokensModule.getEventSubscribers())
