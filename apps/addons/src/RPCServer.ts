/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { Producers } from '@turnly/rpc'
import { config } from '@turnly/shared'
import { IntegrationsServer } from 'Integrations/infrastructure/api/rpc'
import { IntegrationsFactory } from 'Integrations/infrastructure/factories/IntegrationsFactory'

/**
 * Servers
 */
const integrationsServer = new IntegrationsServer(
  IntegrationsFactory.getController()
)

/**
 * Services (RPC)
 *
 * @description Defining the services that the RPC server will be able to handle.
 */
const services = [
  {
    definition: Producers.Addons.IntegrationsService,
    implementation: integrationsServer.implementation,
  },
]

export const rpc = new Producers.Server({
  address: config.get('rpc.bind_address'),
  services,
})
