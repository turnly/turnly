import { commandBus, queryBus } from '@turnly/core'

import { AnswerFactory } from '../factories/AnswerFactory'

/**
 * Answer module
 */
queryBus.register(AnswerFactory.getQueryHandlers())
commandBus.register(AnswerFactory.getCommandHandlers())
