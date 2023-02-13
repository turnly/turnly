/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Producers } from '@turnly/rpc'
import { config } from '@turnly/shared'
import { LocationsModule } from 'Locations/LocationsModule'
import { ServicesModule } from 'Services/ServicesModule'

/**
 * Services (gRPC)
 *
 * @description Defining the services that the RPC server will be able to handle.
 */
const services = [
  {
    definition: Producers.BranchManagement.ServicesService,
    implementation: ServicesModule.getServer(),
  },
  {
    definition: Producers.BranchManagement.LocationsService,
    implementation: LocationsModule.getServer(),
  },
]

const port = config.get('server.port')

export const server = new Producers.Server({ port, services })
