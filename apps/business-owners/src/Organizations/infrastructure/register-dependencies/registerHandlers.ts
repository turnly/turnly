import { queryBus } from '@turnly/shared'

import { OrganizationsFactory } from '../factories/OrganizationsFactory'

/**
 * Organizations module
 */
queryBus.register(OrganizationsFactory.getQueryHandlers())
