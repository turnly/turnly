/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Producers } from '@turnly/rpc'
import { config } from '@turnly/shared'
import { LocationsModule } from 'Locations/LocationsModule'
import { ServicesServer } from 'Services/infrastructure/api/rpc'
import { ServicesFactory } from 'Services/infrastructure/factories/ServicesFactory'

/**
 * Servers
 */
const servicesServer = new ServicesServer(ServicesFactory.getController())

/**
 * Services (RPC)
 *
 * @description Defining the services that the RPC server will be able to handle.
 */
const services = [
  {
    definition: Producers.BranchManagement.ServicesService,
    implementation: servicesServer.implementation,
  },
  {
    definition: Producers.BranchManagement.LocationsService,
    implementation: LocationsModule.getServer(),
  },
]

export const server = new Producers.Server({
  address: config.get('rpc.bind_address'),
  services,
})
