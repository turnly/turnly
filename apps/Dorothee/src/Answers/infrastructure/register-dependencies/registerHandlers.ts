import { commandBus } from '@turnly/shared'

import { AnswerFactory } from '../factories/AnswerFactory'

/**
 * Answer module
 */
commandBus.register(AnswerFactory.getCommandHandlers())
