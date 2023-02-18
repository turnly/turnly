/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Producers } from '@turnly/rpc'
import { config } from '@turnly/shared'
import { CustomersModule } from 'ecustomers/customers.module'
import { TicketsServer } from 'Tickets/infrastructure/api/rpc'
import { TicketsFactory } from 'Tickets/infrastructure/factories/TicketsFactory'

/**
 * Servers
 */
const ticketsServer = new TicketsServer(TicketsFactory.getController())

/**
 * Services (gRPC)
 *
 * @description Defining the services that the RPC server will be able to handle.
 */
const services: Producers.Service[] = [
  {
    definition: Producers.QueuingSystem.TicketsService,
    implementation: ticketsServer.implementation,
  },
  {
    definition: Producers.QueuingSystem.CustomersService,
    implementation: CustomersModule.getServer(),
  },
]

const port = config.get('server.port')

export const server = new Producers.Server({ port, services })
