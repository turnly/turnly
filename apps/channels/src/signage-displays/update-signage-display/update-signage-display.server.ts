/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Consumers, Producers } from '@turnly/grpc'
import {
  ClearTicketsAfter,
  DisplayOrder,
} from 'signage-displays/shared/domain/enums'
import { SignageDisplaysMapper } from 'signage-displays/shared/infrastructure/signage-displays-to-grpc.mapper'

import type { UpdateSignageDisplayController } from './update-signage-display.controller'

export class UpdateSignageDisplayServer {
  public constructor(
    private readonly updateSignageDisplayController: UpdateSignageDisplayController
  ) {}

  @Producers.CallHandler(Producers.Channels.UpdateSignageDisplayResponse)
  public async execute(
    call: Producers.ServerUnaryCall<
      Producers.Channels.UpdateSignageDisplayRequest,
      Producers.Channels.UpdateSignageDisplayResponse
    >,
    callback: Producers.ICallback<Producers.Channels.UpdateSignageDisplayResponse>
  ) {
    const { data, meta } = await this.updateSignageDisplayController.execute({
      name: call.request.getName(),
      id: call.request.getId(),
      refreshTime: call.request.getRefreshTimeValue(),
      clearTicketsAfter:
        call.request.getClearTicketsAfter() as ClearTicketsAfter,
      order: call.request.getOrder() as DisplayOrder,
      serviceIds: call.request.getServiceIdsList(),
      organizationId: Consumers.Client.getOrganizationId(call),
    })

    const response = new Producers.Channels.UpdateSignageDisplayResponse()

    const signageDisplay = SignageDisplaysMapper.toRPC(data)

    response.setData(signageDisplay)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }
}
