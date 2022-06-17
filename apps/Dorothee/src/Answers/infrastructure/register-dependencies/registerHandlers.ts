import { commandBus, eventBus, queryBus } from '@turnly/shared'

import { AnswerFactory } from '../factories/AnswerFactory'

/**
 * Answer module
 */
queryBus.register(AnswerFactory.getQueryHandlers())
commandBus.register(AnswerFactory.getCommandHandlers())
eventBus.subscribe(AnswerFactory.getEventSubscribers())
