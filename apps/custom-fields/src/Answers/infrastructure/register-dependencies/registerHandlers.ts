/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { commandBus, eventBus, queryBus } from '@turnly/shared'

import { AnswersFactory } from '../factories/AnswersFactory'

/**
 * Answer module
 */
queryBus.register(AnswersFactory.getQueryHandlers())
commandBus.register(AnswersFactory.getCommandHandlers())
eventBus.subscribe(AnswersFactory.getEventSubscribers())
