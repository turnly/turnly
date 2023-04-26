/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Consumers, Producers } from '@turnly/grpc'
import { TicketsMapper } from 'tickets/shared/infrastructure/tickets-to-grpc.mapper'

import { GetOneTicketController } from './get-one-ticket.controller'

export class GetOneTicketServer {
  public constructor(
    private readonly getOneTicketController: GetOneTicketController
  ) {}

  @Producers.CallHandler(Producers.QueuingSystem.GetTicketResponse)
  public async execute(
    call: Producers.ServerUnaryCall<
      Producers.QueuingSystem.GetTicketRequest,
      Producers.QueuingSystem.GetTicketResponse
    >,
    callback: Producers.ICallback<Producers.QueuingSystem.GetTicketResponse>
  ) {
    const { data, meta } = await this.getOneTicketController.execute({
      id: call.request.getId(),
      organizationId: Consumers.Client.getOrganizationId(call),
      customerId: call.request.getCustomerId(),
    })

    const response = new Producers.QueuingSystem.GetTicketResponse()
    const ticket = TicketsMapper.toRPC(data)

    response.setData(ticket)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }
}
