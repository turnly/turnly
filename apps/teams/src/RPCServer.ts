/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { Producers } from '@turnly/rpc'
import { config } from '@turnly/shared'
import { AgentsServer } from 'Agents/infrastructure/api/rpc'
import { AgentsFactory } from 'Agents/infrastructure/factories/AgentsFactory'

/**
 * Servers
 */
const agentsServer = new AgentsServer(AgentsFactory.getController())

/**
 * Services (RPC)
 *
 * @description Defining the services that the RPC server will be able to handle.
 */
const services = [
  {
    definition: Producers.Teams.AgentsService,
    implementation: agentsServer.implementation,
  },
]

export const rpc = new Producers.Server({
  address: config.get('rpc.bind_address'),
  services,
})
