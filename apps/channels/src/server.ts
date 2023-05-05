/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { config, oidc } from '@turnly/core'
import { AuthGuard, Producers } from '@turnly/grpc'
import { DevicesModule } from 'devices/devices.module'
import { WidgetsModule } from 'widgets/widgets.module'

/**
 * Services (gRPC)
 *
 * @description Defining the services that the RPC server will be able to handle.
 */
const services: Producers.Service[] = [
  {
    definition: Producers.Channels.WidgetsService,
    implementation: WidgetsModule.getServer(),
  },
  {
    definition: Producers.Channels.DevicesService,
    implementation: DevicesModule.getServer(),
  },
]

const port = config.get('server.port')

export const server = new Producers.Server({
  port,
  services,
  middlewares: [new AuthGuard(oidc)],
})
