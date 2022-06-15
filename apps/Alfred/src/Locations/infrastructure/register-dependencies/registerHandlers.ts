import { queryBus } from '@turnly/shared'

import { LocationFactory } from '../factories/LocationFactory'

/**
 * Location module
 */
queryBus.register(LocationFactory.getQueryHandlers())
