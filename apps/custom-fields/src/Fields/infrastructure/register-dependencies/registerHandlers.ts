/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { commandBus, eventBus, queryBus } from '@turnly/shared'

import { FieldsFactory } from '../factories/FieldsFactory'

/**
 * Field module
 */
queryBus.register(FieldsFactory.getQueryHandlers())
commandBus.register(FieldsFactory.getCommandHandlers())
eventBus.subscribe(FieldsFactory.getEventSubscribers())
