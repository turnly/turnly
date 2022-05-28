import { commandBus, eventBus, queryBus } from '@turnly/shared'

import { TicketFactory } from '../factories/TicketFactory'

/**
 * Tickets module
 */
queryBus.register(TicketFactory.getQueryHandlers())
commandBus.register(TicketFactory.getCommandHandlers())
eventBus.subscribe(TicketFactory.getEventSubscribers())
