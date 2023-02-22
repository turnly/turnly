/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Producers } from '@turnly/rpc'
import { Client } from '@turnly/rpc/dist/consumers'
import { CallTicketController } from 'etickets/CallTicket'
import { TicketsMapper } from 'etickets/eshared/infrastructure/grpc/TicketsMapper'

export class CallTicketServer {
  public constructor(
    private readonly callTicketController: CallTicketController
  ) {}

  @Producers.CallHandler(Producers.QueuingSystem.CallTicketResponse)
  public async call(
    call: Producers.ServerUnaryCall<
      Producers.QueuingSystem.CallTicketRequest,
      Producers.QueuingSystem.CallTicketResponse
    >,
    callback: Producers.ICallback<Producers.QueuingSystem.CallTicketResponse>
  ) {
    const { data, meta } = await this.callTicketController.execute({
      id: call.request.getId(),
      organizationId: Client.getOrganizationId(call),
      agentId: call.request.getAgentId(),
    })

    const response = new Producers.QueuingSystem.CallTicketResponse()
    const ticket = TicketsMapper.toRPC(data)

    response.setData(ticket)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }
}
