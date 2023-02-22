/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Producers } from '@turnly/rpc'
import { Client } from '@turnly/rpc/dist/consumers'
import { ReturnToQueueController } from 'tickets/ReturnToQueue'
import { TicketsMapper } from 'tickets/shared/infrastructure/grpc/TicketsMapper'

export class ReturnToQueueServer {
  public constructor(
    private readonly returnToQueueController: ReturnToQueueController
  ) {}

  @Producers.CallHandler(Producers.QueuingSystem.ReturnToQueueResponse)
  public async returnToQueue(
    call: Producers.ServerUnaryCall<
      Producers.QueuingSystem.ReturnToQueueRequest,
      Producers.QueuingSystem.ReturnToQueueResponse
    >,
    callback: Producers.ICallback<Producers.QueuingSystem.ReturnToQueueResponse>
  ) {
    const { data, meta } = await this.returnToQueueController.execute({
      id: call.request.getId(),
      organizationId: Client.getOrganizationId(call),
    })

    const response = new Producers.QueuingSystem.ReturnToQueueResponse()
    const ticket = TicketsMapper.toRPC(data)

    response.setData(ticket)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }
}
