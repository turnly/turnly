import { Producers } from '@turnly/rpc'

import { fieldsServer } from './servers'

const services = [
  {
    definition: Producers.Dorothee.FieldsService,
    implementation: fieldsServer.implementation,
  },
]

export const rpc = new Producers.Server({
  address: process.env.RPC_BIND_ADDRESS as string,
  services,
})
