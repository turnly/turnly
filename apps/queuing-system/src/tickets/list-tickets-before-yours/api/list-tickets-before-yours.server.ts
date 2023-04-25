/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */

import { Producers } from '@turnly/grpc'
import { Client } from '@turnly/grpc/dist/consumers'
import { TicketsMapper } from 'tickets/shared/infrastructure/grpc/tickets-mapper.grpc'

import { ListTicketsBeforeYoursController } from './list-tickets-before-yours.controller'

export class ListTicketsBeforeYoursServer {
  public constructor(
    private readonly listTicketsBeforeYoursController: ListTicketsBeforeYoursController
  ) {}

  @Producers.CallHandler(Producers.QueuingSystem.GetTicketsBeforeYoursResponse)
  public async getTicketsBeforeYours(
    call: Producers.ServerUnaryCall<
      Producers.QueuingSystem.GetTicketsBeforeYoursRequest,
      Producers.QueuingSystem.GetTicketsBeforeYoursResponse
    >,
    callback: Producers.ICallback<Producers.QueuingSystem.GetTicketsBeforeYoursResponse>
  ) {
    const { data, meta } = await this.listTicketsBeforeYoursController.execute({
      ticketId: call.request.getId(),
      customerId: call.request.getCustomerId(),
      organizationId: Client.getOrganizationId(call),
    })

    const response = new Producers.QueuingSystem.GetTicketsBeforeYoursResponse()

    if (data) response.setDataList(data.map(TicketsMapper.toRPC))

    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }
}