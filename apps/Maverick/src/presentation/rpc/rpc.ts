import { Producers } from '@turnly/rpc'

import { integrationsServer } from './servers'

const services = [
  {
    definition: Producers.Maverick.IntegrationsService,
    implementation: integrationsServer.implementation,
  },
]

export const rpc = new Producers.Server({
  address: process.env.RPC_BIND_ADDRESS as string,
  services,
})
