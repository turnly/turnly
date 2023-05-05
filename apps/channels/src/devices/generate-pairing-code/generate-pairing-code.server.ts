/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Consumers, Producers } from '@turnly/grpc'
import { DevicesMapper } from 'devices/shared/infrastructure/devices-to-grpc.mapper'

import { GeneratePairingCodeController } from './generate-pairing-code.controller'

export class GeneratePairingCodeServer {
  public constructor(
    private readonly generatePairingCodeController: GeneratePairingCodeController
  ) {}

  @Producers.CallHandler(Producers.Channels.GeneratePairingCodeDeviceResponse)
  public async execute(
    call: Producers.ServerUnaryCall<
      Producers.Channels.GeneratePairingCodeDeviceRequest,
      Producers.Channels.GeneratePairingCodeDeviceResponse
    >,
    callback: Producers.ICallback<Producers.Channels.GeneratePairingCodeDeviceResponse>
  ) {
    const { data, meta } = await this.generatePairingCodeController.execute({
      name: call.request.getName(),
      organizationId: Consumers.Client.getOrganizationId(call),
    })

    const response = new Producers.Channels.GeneratePairingCodeDeviceResponse()
    const device = DevicesMapper.toRPC(data)

    response.setData(device)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }
}
