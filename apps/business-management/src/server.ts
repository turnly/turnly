/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { config, oidc } from '@turnly/core'
import { AuthGuard, Producers } from '@turnly/grpc'
import { AccessTokensModule } from 'access-tokens/access-tokens.module'
import { MembersModule } from 'members/members.module'
import { OrganizationsModule } from 'organizations/organizations.module'

/**
 * Services (gRPC)
 *
 * @description Defining the services that the RPC server will be able to handle.
 */
const services: Producers.Service[] = [
  {
    definition: Producers.BusinessManagement.OrganizationsService,
    implementation: OrganizationsModule.getServer(),
  },
  {
    definition: Producers.BusinessManagement.MembersService,
    implementation: MembersModule.getServer(),
  },
  {
    definition: Producers.BusinessManagement.AccessTokensService,
    implementation: AccessTokensModule.getServer(),
  },
]

const port = config.get('server.port')

export const server = new Producers.Server({
  port,
  services,
  middlewares: [new AuthGuard(oidc)],
})
