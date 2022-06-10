import { Producers } from '@turnly/rpc'
import { AgentsServer } from 'Agents/infrastructure/api/rpc'
import { AgentFactory } from 'Agents/infrastructure/factories/AgentFactory'

/**
 * Servers
 */
export const agentsServer = new AgentsServer(AgentFactory.getController())

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
