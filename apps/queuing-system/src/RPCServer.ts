/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { Producers } from '@turnly/rpc'
import { config } from '@turnly/shared'
import { CustomersServer } from 'Customers/infrastructure/api/rpc'
import { CustomersFactory } from 'Customers/infrastructure/factories/CustomersFactory'
import { TicketsServer } from 'Tickets/infrastructure/api/rpc'
import { TicketsFactory } from 'Tickets/infrastructure/factories/TicketsFactory'

/**
 * Servers
 */
const ticketsServer = new TicketsServer(TicketsFactory.getController())
const customersServer = new CustomersServer(CustomersFactory.getController())

/**
 * Services (RPC)
 *
 * @description Defining the services that the RPC server will be able to handle.
 */
const services = [
  {
    definition: Producers.QueuingSystem.TicketsService,
    implementation: ticketsServer.implementation,
  },
  {
    definition: Producers.QueuingSystem.CustomersService,
    implementation: customersServer.implementation,
  },
]

export const rpc = new Producers.Server({
  address: config.get('rpc.bind_address'),
  services,
})
