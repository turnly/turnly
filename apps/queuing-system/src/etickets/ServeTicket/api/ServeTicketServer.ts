/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Producers } from '@turnly/rpc'
import { Client } from '@turnly/rpc/dist/consumers'
import { ServeTicketController } from 'etickets/ServeTicket'
import { TicketsMapper } from 'etickets/eshared/infrastructure/grpc/TicketsMapper'

export class ServeTicketServer {
  public constructor(
    private readonly serveTicketController: ServeTicketController
  ) {}

  @Producers.CallHandler(Producers.QueuingSystem.ServeTicketResponse)
  public async execute(
    call: Producers.ServerUnaryCall<
      Producers.QueuingSystem.ServeTicketRequest,
      Producers.QueuingSystem.ServeTicketResponse
    >,
    callback: Producers.ICallback<Producers.QueuingSystem.ServeTicketResponse>
  ) {
    const { data, meta } = await this.serveTicketController.execute({
      id: call.request.getId(),
      organizationId: Client.getOrganizationId(call),
    })

    const response = new Producers.QueuingSystem.ServeTicketResponse()
    const ticket = TicketsMapper.toRPC(data)

    response.setData(ticket)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }
}
