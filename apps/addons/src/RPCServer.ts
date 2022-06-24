import { Producers } from '@turnly/rpc'
import { IntegrationsServer } from 'Integrations/infrastructure/api/rpc'
import { IntegrationsFactory } from 'Integrations/infrastructure/factories/IntegrationsFactory'

/**
 * Servers
 */
const integrationsServer = new IntegrationsServer(
  IntegrationsFactory.getController()
)

/**
 * Services (RPC)
 *
 * @description Defining the services that the RPC server will be able to handle.
 */
const services = [
  {
    definition: Producers.Addons.IntegrationsService,
    implementation: integrationsServer.implementation,
  },
]

export const rpc = new Producers.Server({
  address: process.env.RPC_BIND_ADDRESS as string,
  services,
})
