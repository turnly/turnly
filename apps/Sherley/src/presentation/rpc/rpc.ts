import { Producers } from '@turnly/rpc'

import { ticketsServer } from './servers'

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
