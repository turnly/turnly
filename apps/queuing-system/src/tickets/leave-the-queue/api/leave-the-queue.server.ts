/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Producers } from '@turnly/grpc'
import { Client } from '@turnly/grpc/dist/consumers'
import { LeaveTheQueueController } from 'tickets/leave-the-queue'
import { TicketsMapper } from 'tickets/shared/infrastructure/grpc/tickets-mapper.grpc'

export class LeaveTheQueueServer {
  public constructor(
    private readonly leaveTheQueueController: LeaveTheQueueController
  ) {}

  @Producers.CallHandler(Producers.QueuingSystem.LeaveTicketResponse)
  public async execute(
    call: Producers.ServerUnaryCall<
      Producers.QueuingSystem.LeaveTicketRequest,
      Producers.QueuingSystem.LeaveTicketResponse
    >,
    callback: Producers.ICallback<Producers.QueuingSystem.LeaveTicketResponse>
  ) {
    const { data, meta } = await this.leaveTheQueueController.execute({
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
