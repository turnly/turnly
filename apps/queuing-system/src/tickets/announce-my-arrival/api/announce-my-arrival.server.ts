/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Producers } from '@turnly/rpc'
import { Client } from '@turnly/rpc/dist/consumers'
import { AnnounceMyArrivalController } from 'tickets/announce-my-arrival'
import { TicketsMapper } from 'tickets/shared/infrastructure/grpc/TicketsMapper'

export class AnnounceMyArrivalServer {
  public constructor(
    private readonly announceMyArrivalController: AnnounceMyArrivalController
  ) {}

  @Producers.CallHandler(Producers.QueuingSystem.AnnounceMyArrivalResponse)
  public async execute(
    call: Producers.ServerUnaryCall<
      Producers.QueuingSystem.AnnounceMyArrivalRequest,
      Producers.QueuingSystem.AnnounceMyArrivalResponse
    >,
    callback: Producers.ICallback<Producers.QueuingSystem.AnnounceMyArrivalResponse>
  ) {
    const { data, meta } = await this.announceMyArrivalController.execute({
      id: call.request.getId(),
      organizationId: Client.getOrganizationId(call),
      customerId: call.request.getCustomerId(),
    })

    const response = new Producers.QueuingSystem.AnnounceMyArrivalResponse()
    const ticket = TicketsMapper.toRPC(data)

    response.setData(ticket)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }
}
