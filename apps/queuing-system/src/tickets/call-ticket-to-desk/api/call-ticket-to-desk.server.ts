/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Consumers, Producers } from '@turnly/grpc'
import { CallTicketToDeskController } from 'tickets/call-ticket-to-desk'
import { TicketsMapper } from 'tickets/shared/infrastructure/grpc/tickets-mapper.grpc'

export class CallTicketToDeskServer {
  public constructor(
    private readonly callTicketToDeskController: CallTicketToDeskController
  ) {}

  @Producers.CallHandler(Producers.QueuingSystem.CallTicketToDeskResponse)
  public async call(
    call: Producers.ServerUnaryCall<
      Producers.QueuingSystem.CallTicketToDeskRequest,
      Producers.QueuingSystem.CallTicketToDeskResponse
    >,
    callback: Producers.ICallback<Producers.QueuingSystem.CallTicketToDeskResponse>
  ) {
    const { data, meta } = await this.callTicketToDeskController.execute({
      id: call.request.getId(),
      organizationId: Consumers.Client.getOrganizationId(call),
      agentId: call.request.getAgentId(),
    })

    const response = new Producers.QueuingSystem.CallTicketToDeskResponse()
    const ticket = TicketsMapper.toRPC(data)

    response.setData(ticket)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }
}
