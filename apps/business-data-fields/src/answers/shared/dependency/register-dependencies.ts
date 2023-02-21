/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { commandBus, eventBus, queryBus } from '@turnly/shared'

import { AnswersModule } from '../../answers.module'

/**
 * Answer module
 */
queryBus.register(AnswersModule.getQueryHandlers())
commandBus.register(AnswersModule.getCommandHandlers())
eventBus.subscribe(AnswersModule.getEventSubscribers())
