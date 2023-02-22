/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Producers } from '@turnly/rpc'
import { Client } from '@turnly/rpc/dist/consumers'
import { LeaveTicketController } from 'etickets/LeaveTicket'
import { TicketsMapper } from 'etickets/eshared/infrastructure/grpc/TicketsMapper'

export class LeaveTicketServer {
  public constructor(
    private readonly leaveTicketController: LeaveTicketController
  ) {}

  @Producers.CallHandler(Producers.QueuingSystem.LeaveTicketResponse)
  public async execute(
    call: Producers.ServerUnaryCall<
      Producers.QueuingSystem.LeaveTicketRequest,
      Producers.QueuingSystem.LeaveTicketResponse
    >,
    callback: Producers.ICallback<Producers.QueuingSystem.LeaveTicketResponse>
  ) {
    const { data, meta } = await this.leaveTicketController.execute({
      id: call.request.getId(),
      organizationId: Client.getOrganizationId(call),
      customerId: call.request.getCustomerId(),
    })

    const response = new Producers.QueuingSystem.LeaveTicketResponse()
    const ticket = TicketsMapper.toRPC(data)

    response.setData(ticket)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }
}
