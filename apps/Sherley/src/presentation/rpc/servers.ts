import { TicketsServer } from 'Tickets/infrastructure/api/presentation/rpc'
import { TicketFactory } from 'Tickets/infrastructure/factories/TicketFactory'

/**
 * Servers
 */
export const ticketsServer = new TicketsServer(TicketFactory.getController())
