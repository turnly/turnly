import { Producers } from '@turnly/rpc'
import { LocationsServer } from 'Locations/infrastructure/api/rpc'
import { LocationsFactory } from 'Locations/infrastructure/factories/LocationsFactory'
import { ServicesServer } from 'Services/infrastructure/api/rpc'
import { ServicesFactory } from 'Services/infrastructure/factories/ServicesFactory'

/**
 * Servers
 */
const servicesServer = new ServicesServer(ServicesFactory.getController())
const locationsServer = new LocationsServer(LocationsFactory.getController())

/**
 * Services (RPC)
 *
 * @description Defining the services that the RPC server will be able to handle.
 */
const services = [
  {
    definition: Producers.Alfred.ServicesService,
    implementation: servicesServer.implementation,
  },
  {
    definition: Producers.Alfred.LocationsService,
    implementation: locationsServer.implementation,
  },
]

export const rpc = new Producers.Server({
  address: process.env.RPC_BIND_ADDRESS as string,
  services,
})
