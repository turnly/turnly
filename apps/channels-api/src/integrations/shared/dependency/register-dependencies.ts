/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { commandBus, eventBus, queryBus } from '@turnly/shared'

import { IntegrationsModule } from '../../integrations.module'

/**
 * Integrations module
 */
queryBus.register(IntegrationsModule.getQueryHandlers())
commandBus.register(IntegrationsModule.getCommandHandlers())
eventBus.subscribe(IntegrationsModule.getEventSubscribers())
