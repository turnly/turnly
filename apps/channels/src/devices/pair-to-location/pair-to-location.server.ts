/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Consumers, Producers } from '@turnly/grpc'
import { DeviceTypes } from 'devices/shared/domain/enums/device-types.enum'
import { DevicesMapper } from 'devices/shared/infrastructure/devices-to-grpc.mapper'

import { PairToLocationController } from './pair-to-location.controller'

export class PairToLocationServer {
  public constructor(
    private readonly pairToLocationCodeController: PairToLocationController
  ) {}

  @Producers.CallHandler(Producers.Channels.PairToLocationDeviceResponse)
  public async execute(
    call: Producers.ServerUnaryCall<
      Producers.Channels.PairToLocationDeviceRequest,
      Producers.Channels.PairToLocationDeviceResponse
    >,
    callback: Producers.ICallback<Producers.Channels.PairToLocationDeviceResponse>
  ) {
    const { data, meta } = await this.pairToLocationCodeController.execute({
      pairingCode: call.request.getPairingCode(),
      locationId: call.request.getLocationId(),
      type: call.request.getType() as DeviceTypes,
      organizationId: Consumers.Client.getOrganizationId(call),
    })

    const response = new Producers.Channels.PairToLocationDeviceResponse()
    const device = DevicesMapper.toRPC(data)

    response.setData(device)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }
}
