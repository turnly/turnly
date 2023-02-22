/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Producers } from '@turnly/rpc'
import { Client } from '@turnly/rpc/dist/consumers'
import { AnnounceTicketController } from 'tickets/AnnounceTicket'
import { TicketsMapper } from 'tickets/shared/infrastructure/grpc/TicketsMapper'

export class AnnounceTicketServer {
  public constructor(
    private readonly announceTicketController: AnnounceTicketController
  ) {}

  @Producers.CallHandler(Producers.QueuingSystem.AnnounceTicketResponse)
  public async execute(
    call: Producers.ServerUnaryCall<
      Producers.QueuingSystem.AnnounceTicketRequest,
      Producers.QueuingSystem.AnnounceTicketResponse
    >,
    callback: Producers.ICallback<Producers.QueuingSystem.AnnounceTicketResponse>
  ) {
    const { data, meta } = await this.announceTicketController.execute({
      id: call.request.getId(),
      organizationId: Client.getOrganizationId(call),
      customerId: call.request.getCustomerId(),
    })

    const response = new Producers.QueuingSystem.AnnounceTicketResponse()
    const ticket = TicketsMapper.toRPC(data)

    response.setData(ticket)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }
}
