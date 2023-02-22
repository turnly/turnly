/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Producers } from '@turnly/rpc'
import { Client } from '@turnly/rpc/dist/consumers'
import { DiscardTicketController } from 'etickets/DiscardTicket'
import { TicketsMapper } from 'etickets/eshared/infrastructure/grpc/TicketsMapper'

export class DiscardTicketServer {
  public constructor(
    private readonly discardTicketController: DiscardTicketController
  ) {}

  @Producers.CallHandler(Producers.QueuingSystem.DiscardTicketResponse)
  public async execute(
    call: Producers.ServerUnaryCall<
      Producers.QueuingSystem.DiscardTicketRequest,
      Producers.QueuingSystem.DiscardTicketResponse
    >,
    callback: Producers.ICallback<Producers.QueuingSystem.DiscardTicketResponse>
  ) {
    const { data, meta } = await this.discardTicketController.execute({
      id: call.request.getId(),
      organizationId: Client.getOrganizationId(call),
    })

    const response = new Producers.QueuingSystem.DiscardTicketResponse()
    const ticket = TicketsMapper.toRPC(data)

    response.setData(ticket)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }
}
