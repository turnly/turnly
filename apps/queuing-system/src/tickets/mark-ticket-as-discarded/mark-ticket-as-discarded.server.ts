/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Consumers, Producers } from '@turnly/grpc'
import { MarkTicketAsDiscardedController } from 'tickets/mark-ticket-as-discarded'
import { TicketsMapper } from 'tickets/shared/infrastructure/tickets-to-grpc.mapper'

export class MarkTicketAsDiscardedServer {
  public constructor(
    private readonly markTicketAsDiscardedController: MarkTicketAsDiscardedController
  ) {}

  @Producers.CallHandler(Producers.QueuingSystem.DiscardTicketResponse)
  public async execute(
    call: Producers.ServerUnaryCall<
      Producers.QueuingSystem.DiscardTicketRequest,
      Producers.QueuingSystem.DiscardTicketResponse
    >,
    callback: Producers.ICallback<Producers.QueuingSystem.DiscardTicketResponse>
  ) {
    const { data, meta } = await this.markTicketAsDiscardedController.execute({
      id: call.request.getId(),
      organizationId: Consumers.Client.getOrganizationId(call),
    })

    const response = new Producers.QueuingSystem.DiscardTicketResponse()
    const ticket = TicketsMapper.toRPC(data)

    response.setData(ticket)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }
}
