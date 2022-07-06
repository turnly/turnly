/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { queryBus } from '@turnly/shared'

import { OrganizationsFactory } from '../factories/OrganizationsFactory'

/**
 * Organizations module
 */
queryBus.register(OrganizationsFactory.getQueryHandlers())
