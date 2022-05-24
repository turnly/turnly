import { commandBus, eventBus, queryBus } from '@turnly/core'

import { TicketFactory } from '../factories/TicketFactory'

/**
 * Tickets module
 */
queryBus.register(TicketFactory.getQueryHandlers())
commandBus.register(TicketFactory.getCommandHandlers())
eventBus.subscribe(TicketFactory.getEventSubscribers())
