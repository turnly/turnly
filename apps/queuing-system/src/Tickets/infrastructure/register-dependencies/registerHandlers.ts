/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { commandBus, elasticClient, eventBus, queryBus } from '@turnly/shared'

import { TicketsFactory } from '../factories/TicketsFactory'
import { TicketsMappings } from '../persistence/elasticsearch/mappings/TicketsMappings'

/**
 * Tickets module
 */
queryBus.register(TicketsFactory.getQueryHandlers())
commandBus.register(TicketsFactory.getCommandHandlers())
eventBus.subscribe(TicketsFactory.getEventSubscribers())

/**
 * Create index if it doesn't exist
 */
elasticClient.indexes([TicketsMappings])
