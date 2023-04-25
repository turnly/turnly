/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */

/**
 * Handlers
 *
 * @description This file is used to register handlers to the bus.
 */
import { commandBus, eventBus, queryBus } from '@turnly/shared'

import { OrganizationsModule } from '../../organizations.module'

/**
 * Organization module
 */
queryBus.register(OrganizationsModule.getQueryHandlers())
commandBus.register(OrganizationsModule.getCommandHandlers())
eventBus.subscribe(OrganizationsModule.getEventSubscribers())
