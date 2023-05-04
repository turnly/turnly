/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Consumers, Producers } from '@turnly/grpc'
import { SignageDisplaysMapper } from 'signage-displays/shared/infrastructure/signage-displays-to-grpc.mapper'

import { GetPairingCodeController } from './get-pairing-code.controller'

export class GetPairingCodeServer {
  public constructor(
    private readonly getPairingCodeController: GetPairingCodeController
  ) {}

  @Producers.CallHandler(
    Producers.Channels.GetPairingCodeSignageDisplayResponse
  )
  public async execute(
    call: Producers.ServerUnaryCall<
      Producers.Channels.GetPairingCodeSignageDisplayRequest,
      Producers.Channels.GetPairingCodeSignageDisplayResponse
    >,
    callback: Producers.ICallback<Producers.Channels.GetPairingCodeSignageDisplayResponse>
  ) {
    const { data, meta } = await this.getPairingCodeController.execute({
      name: call.request.getName(),
      organizationId: Consumers.Client.getOrganizationId(call),
    })

    const response =
      new Producers.Channels.GetPairingCodeSignageDisplayResponse()
    const signageDisplay = SignageDisplaysMapper.toRPC(data)

    response.setData(signageDisplay)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }
}
