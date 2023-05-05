/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Consumers, Producers } from '@turnly/grpc'
import { SignageDisplaysMapper } from 'signage-displays/shared/infrastructure/signage-displays-to-grpc.mapper'

import type { GetOneSignageDisplayController } from './get-one-signage-display.controller'

export class GetOneSignageDisplayServer {
  public constructor(
    private readonly getOneSignageDisplayController: GetOneSignageDisplayController
  ) {}

  @Producers.CallHandler(Producers.Channels.GetOneSignageDisplayResponse)
  public async execute(
    call: Producers.ServerUnaryCall<
      Producers.Channels.GetOneSignageDisplayRequest,
      Producers.Channels.GetOneSignageDisplayResponse
    >,
    callback: Producers.ICallback<Producers.Channels.GetOneSignageDisplayResponse>
  ) {
    const { data, meta } = await this.getOneSignageDisplayController.execute({
      id: call.request.getId(),
      organizationId: Consumers.Client.getOrganizationId(call),
    })

    const response = new Producers.Channels.GetOneSignageDisplayResponse()
    const signageDisplay = SignageDisplaysMapper.toRPC(data)

    response.setData(signageDisplay)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }
}
