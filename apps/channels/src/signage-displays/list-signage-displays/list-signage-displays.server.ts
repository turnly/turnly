/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Consumers, Producers } from '@turnly/grpc'
import { SignageDisplaysMapper } from 'signage-displays/shared/infrastructure/signage-displays-to-grpc.mapper'

import { ListSignageDisplaysController } from './list-signage-displays.controller'

export class ListSignageDisplaysServer {
  public constructor(
    private readonly listSignageDisplaysController: ListSignageDisplaysController
  ) {}

  @Producers.CallHandler(Producers.Channels.ListSignageDisplaysResponse)
  public async execute(
    call: Producers.ServerUnaryCall<
      Producers.Channels.ListSignageDisplaysRequest,
      Producers.Channels.ListSignageDisplaysResponse
    >,
    callback: Producers.ICallback<Producers.Channels.ListSignageDisplaysResponse>
  ) {
    const { data, meta } = await this.listSignageDisplaysController.execute({
      locationId: call.request.getLocationId(),
      organizationId: Consumers.Client.getOrganizationId(call),
      limit: call.request.getLimit(),
      offset: call.request.getOffset(),
    })

    const response = new Producers.Channels.ListSignageDisplaysResponse()

    if (data) response.setDataList(data.map(SignageDisplaysMapper.toRPC))

    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }
}
