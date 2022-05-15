import { Producers } from '@turnly/rpc'

import { integrationsServer } from './servers'

const services = [
  {
    definition: Producers.IntegrationsService,
    implementation: integrationsServer.implementation,
  },
]

export const rpcServerOptions = Object.freeze({
  address: process.env.RPC_BIND_ADDRESS as string,
  services,
})
