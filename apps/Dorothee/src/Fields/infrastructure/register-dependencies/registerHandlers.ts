import { commandBus, queryBus } from '@turnly/core'

import { FieldFactory } from '../factories/FieldFactory'

/**
 * Field module
 */
queryBus.register(FieldFactory.getQueryHandlers())
commandBus.register(FieldFactory.getCommandHandlers())
