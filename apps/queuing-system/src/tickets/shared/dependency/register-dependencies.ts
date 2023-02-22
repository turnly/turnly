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
import { commandBus, elasticClient, eventBus, queryBus } from '@turnly/shared'

import { TicketsModule } from '../../tickets.module'
import { TicketsMappings } from '../infrastructure/persistence/elasticsearch/mappings/TicketsMappings'

/**
 * Ticket module
 */
queryBus.register(TicketsModule.getQueryHandlers())
commandBus.register(TicketsModule.getCommandHandlers())
eventBus.subscribe(TicketsModule.getEventSubscribers())

/**
 * Create index if it doesn't exist
 */
elasticClient.indices([TicketsMappings])
