/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Consumers, Producers } from '@turnly/grpc'
import { MarkTicketAsServedController } from 'tickets/mark-ticket-as-served'
import { TicketsMapper } from 'tickets/shared/infrastructure/tickets-to-grpc.mapper'

export class MarkTicketAsServedServer {
  public constructor(
    private readonly markTicketAsServedController: MarkTicketAsServedController
  ) {}

  @Producers.CallHandler(Producers.QueuingSystem.ServeTicketResponse)
  public async execute(
    call: Producers.ServerUnaryCall<
      Producers.QueuingSystem.ServeTicketRequest,
      Producers.QueuingSystem.ServeTicketResponse
    >,
    callback: Producers.ICallback<Producers.QueuingSystem.ServeTicketResponse>
  ) {
    const { data, meta } = await this.markTicketAsServedController.execute({
      id: call.request.getId(),
      organizationId: Consumers.Client.getOrganizationId(call),
    })

    const response = new Producers.QueuingSystem.ServeTicketResponse()
    const ticket = TicketsMapper.toRPC(data)

    response.setData(ticket)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }
}
