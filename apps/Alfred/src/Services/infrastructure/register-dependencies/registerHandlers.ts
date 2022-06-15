import { queryBus } from '@turnly/shared'

import { ServiceFactory } from '../factories/ServiceFactory'

/**
 * Service module
 */
queryBus.register(ServiceFactory.getQueryHandlers())
