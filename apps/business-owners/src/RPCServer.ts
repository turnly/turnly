/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { Producers } from '@turnly/rpc'
import { config } from '@turnly/shared'
import { OrganizationsServer } from 'Organizations/infrastructure/api/rpc'
import { OrganizationsFactory } from 'Organizations/infrastructure/factories/OrganizationsFactory'

/**
 * Servers
 */
const organizationsServer = new OrganizationsServer(
  OrganizationsFactory.getController()
)

/**
 * Services (RPC)
 *
 * @description Defining the services that the RPC server will be able to handle.
 */
const services = [
  {
    definition: Producers.BusinessOwners.OrganizationsService,
    implementation: organizationsServer.implementation,
  },
]

export const rpc = new Producers.Server({
  address: config.get('rpc.bind_address'),
  services,
})
