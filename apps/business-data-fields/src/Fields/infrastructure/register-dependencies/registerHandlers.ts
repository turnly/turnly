/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { commandBus, eventBus, queryBus } from '@turnly/shared'

import { FieldsFactory } from '../factories/FieldsFactory'

/**
 * Field module
 */
queryBus.register(FieldsFactory.getQueryHandlers())
commandBus.register(FieldsFactory.getCommandHandlers())
eventBus.subscribe(FieldsFactory.getEventSubscribers())
