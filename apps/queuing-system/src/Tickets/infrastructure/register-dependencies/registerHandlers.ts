/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
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
elasticClient.indices([TicketsMappings])
