import { Producers } from '@turnly/rpc'
import { TicketsServer } from 'Tickets/infrastructure/api/rpc'
import { TicketFactory } from 'Tickets/infrastructure/factories/TicketFactory'

/**
 * Servers
 */
export const ticketsServer = new TicketsServer(TicketFactory.getController())

/**
 * Services (RPC)
 *
 * @description Defining the services that the RPC server will be able to handle.
 */
const services = [
  {
    definition: Producers.Sherley.TicketsService,
    implementation: ticketsServer.implementation,
  },
]

export const rpc = new Producers.Server({
  address: process.env.RPC_BIND_ADDRESS as string,
  services,
})
