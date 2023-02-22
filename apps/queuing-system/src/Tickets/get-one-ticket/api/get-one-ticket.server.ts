/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Producers } from '@turnly/grpc'
import { Client } from '@turnly/grpc/dist/consumers'
import { TicketsMapper } from 'Tickets/Shared/infrastructure/grpc/TicketsMapper'

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
      organizationId: Client.getOrganizationId(call),
      customerId: call.request.getCustomerId(),
    })

    const response = new Producers.QueuingSystem.GetTicketResponse()
    const ticket = TicketsMapper.toRPC(data)

    response.setData(ticket)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }
}
