import { commandBus, queryBus } from '@turnly/shared'

import { CustomerFactory } from '../factories/CustomerFactory'

/**
 * Customer module
 */
commandBus.register(CustomerFactory.getCommandHandlers())
queryBus.register(CustomerFactory.getQueryHandlers())
