/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Producers } from '@turnly/grpc'
import { WidgetsMapper } from 'widgets/shared/infrastructure/widgets-to-grpc.mapper'

import { GetOneWidgetController } from './get-one-widget.controller'

export class GetOneWidgetServer {
  public constructor(
    private readonly getOneWidgetController: GetOneWidgetController
  ) {}

  @Producers.CallHandler(Producers.Channels.GetWidgetResponse)
  public async execute(
    call: Producers.ServerUnaryCall<
      Producers.Channels.GetWidgetRequest,
      Producers.Channels.GetWidgetResponse
    >,
    callback: Producers.ICallback<Producers.Channels.GetWidgetResponse>
  ) {
    const { data, meta } = await this.getOneWidgetController.execute({
      id: call.request.getId(),
    })

    const response = new Producers.Channels.GetWidgetResponse()
    const widget = WidgetsMapper.toRPC(data)

    response.setData(widget)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }
}
