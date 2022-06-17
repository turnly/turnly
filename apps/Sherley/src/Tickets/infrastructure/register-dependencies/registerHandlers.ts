import { commandBus, elasticClient, eventBus, queryBus } from '@turnly/shared'

import { TicketFactory } from '../factories/TicketFactory'
import { TicketMappings } from '../persistence/elasticsearch/mappings/TicketMappings'

/**
 * Tickets module
 */
queryBus.register(TicketFactory.getQueryHandlers())
commandBus.register(TicketFactory.getCommandHandlers())
eventBus.subscribe(TicketFactory.getEventSubscribers())

/**
 * Create index if it doesn't exist
 */
elasticClient.indexes([TicketMappings])
