/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Consumers, Producers } from '@turnly/grpc'

import { GeneratePairingCodeController } from './generate-pairing-code.controller'

export class GeneratePairingCodeServer {
  public constructor(
    private readonly generatePairingCodeController: GeneratePairingCodeController
  ) {}

  @Producers.CallHandler(
    Producers.Channels.GeneratePairingCodeSignageDisplayResponse
  )
  public async execute(
    call: Producers.ServerUnaryCall<
      Producers.Channels.GeneratePairingCodeSignageDisplayRequest,
      Producers.Channels.GeneratePairingCodeSignageDisplayResponse
    >,
    callback: Producers.ICallback<Producers.Channels.GeneratePairingCodeSignageDisplayResponse>
  ) {
    const { data, meta } = await this.generatePairingCodeController.execute({
      name: call.request.getName(),
      organizationId: Consumers.Client.getOrganizationId(call),
    })

    const response =
      new Producers.Channels.GeneratePairingCodeSignageDisplayResponse()

    const payload = new Producers.Channels.GeneratePairingCodeObject()

    if (data?.pairingCode) {
      payload.setPairingCode(data.pairingCode)
    }

    response.setData(payload)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }
}
