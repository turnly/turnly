/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { commandBus, eventBus, queryBus } from '@turnly/shared'

import { AnswersFactory } from '../factories/AnswersFactory'

/**
 * Answer module
 */
queryBus.register(AnswersFactory.getQueryHandlers())
commandBus.register(AnswersFactory.getCommandHandlers())
eventBus.subscribe(AnswersFactory.getEventSubscribers())
