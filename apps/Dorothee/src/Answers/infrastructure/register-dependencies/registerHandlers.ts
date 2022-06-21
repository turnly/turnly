import { commandBus, eventBus, queryBus } from '@turnly/shared'

import { AnswersFactory } from '../factories/AnswersFactory'

/**
 * Answer module
 */
queryBus.register(AnswersFactory.getQueryHandlers())
commandBus.register(AnswersFactory.getCommandHandlers())
eventBus.subscribe(AnswersFactory.getEventSubscribers())
