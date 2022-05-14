import { Producers } from '@turnly/rpc'
import { IntegrationFactory } from 'packages/integrations/infrastructure/factories/IntegrationFactory'

import { IntegrationsServer } from './servers/integrationsServer'

/**
 * Servers
 */
const integrations = new IntegrationsServer(IntegrationFactory.getController())

const services = [
  {
    definition: Producers.IntegrationsService,
    implementation: integrations.implementation,
  },
]

export const rpcOptions = Object.freeze({
  address: process.env.RPC_BIND_ADDRESS as string,
  services,
})
