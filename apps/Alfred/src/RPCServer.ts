import { Producers } from '@turnly/rpc'
import { LocationsServer } from 'Locations/infrastructure/api/rpc'
import { LocationFactory } from 'Locations/infrastructure/factories/LocationFactory'
import { ServicesServer } from 'Services/infrastructure/api/rpc'
import { ServiceFactory } from 'Services/infrastructure/factories/ServiceFactory'

/**
 * Servers
 */
export const servicesServer = new ServicesServer(ServiceFactory.getController())
export const locationsServer = new LocationsServer(
  LocationFactory.getController()
)

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
