import { commandBus, queryBus } from '@turnly/shared'

import { AnswerFactory } from '../factories/AnswerFactory'

/**
 * Answer module
 */
queryBus.register(AnswerFactory.getQueryHandlers())
commandBus.register(AnswerFactory.getCommandHandlers())
