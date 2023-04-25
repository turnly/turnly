/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Consumers, Producers } from '@turnly/grpc'
import { TicketsMapper } from 'tickets/shared/infrastructure/grpc/tickets-mapper.grpc'

import { GetTicketDetailsController } from './get-ticket-details.controller'

export class GetTicketDetailsServer {
  public constructor(
    private readonly getTicketDetailsController: GetTicketDetailsController
  ) {}

  @Producers.CallHandler(Producers.QueuingSystem.GetTicketDetailsResponse)
  public async execute(
    call: Producers.ServerUnaryCall<
      Producers.QueuingSystem.GetTicketDetailsRequest,
      Producers.QueuingSystem.GetTicketDetailsResponse
    >,
    callback: Producers.ICallback<Producers.QueuingSystem.GetTicketDetailsResponse>
  ) {
    const { data, meta } = await this.getTicketDetailsController.execute({
      id: call.request.getId(),
      organizationId: Consumers.Client.getOrganizationId(call),
    })

    const response = new Producers.QueuingSystem.GetTicketDetailsResponse()
    const ticket = TicketsMapper.toRPC(data)

    response.setData(ticket)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }
}
