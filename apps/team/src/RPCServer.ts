import { Producers } from '@turnly/rpc'
import { AgentsServer } from 'Agents/infrastructure/api/rpc'
import { AgentsFactory } from 'Agents/infrastructure/factories/AgentsFactory'

/**
 * Servers
 */
const agentsServer = new AgentsServer(AgentsFactory.getController())

/**
 * Services (RPC)
 *
 * @description Defining the services that the RPC server will be able to handle.
 */
const services = [
  {
    definition: Producers.Shannon.AgentsService,
    implementation: agentsServer.implementation,
  },
]

export const rpc = new Producers.Server({
  address: process.env.RPC_BIND_ADDRESS as string,
  services,
})
