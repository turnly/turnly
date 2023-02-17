/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Producers } from '@turnly/rpc'
import { config } from '@turnly/shared'
import { CustomersModule } from 'Customers/CustomersModule'
import { TicketsModule } from 'Tickets/TicketsModule'

/**
 * Services (gRPC)
 *
 * @description Defining the services that the RPC server will be able to handle.
 */
const services: Producers.Service[] = [
  {
    definition: Producers.QueuingSystem.TicketsService,
    implementation: TicketsModule.getServer(),
  },
  {
    definition: Producers.QueuingSystem.CustomersService,
    implementation: CustomersModule.getServer(),
  },
]

const port = config.get('server.port')

export const server = new Producers.Server({ port, services })
