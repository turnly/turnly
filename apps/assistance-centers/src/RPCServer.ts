/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { Producers } from '@turnly/rpc'
import { config } from '@turnly/shared'
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
    definition: Producers.AssistanceCenters.ServicesService,
    implementation: servicesServer.implementation,
  },
  {
    definition: Producers.AssistanceCenters.LocationsService,
    implementation: locationsServer.implementation,
  },
]

export const rpc = new Producers.Server({
  address: config.get('rpc.bind_address'),
  services,
})
