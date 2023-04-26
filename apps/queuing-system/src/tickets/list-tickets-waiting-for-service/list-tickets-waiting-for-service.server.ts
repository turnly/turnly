/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Consumers, Producers } from '@turnly/grpc'
import { TicketsMapper } from 'tickets/shared/infrastructure/tickets-to-grpc.mapper'

import { ListTicketsWaitingForServiceController } from './list-tickets-waiting-for-service.controller'

export class ListTicketsWaitingForServiceServer {
  public constructor(
    private readonly listTicketsWaitingForServiceController: ListTicketsWaitingForServiceController
  ) {}

  @Producers.CallHandler(
    Producers.QueuingSystem.GetTicketsWaitingForServiceResponse
  )
  public async execute(
    call: Producers.ServerUnaryCall<
      Producers.QueuingSystem.GetTicketsWaitingForServiceRequest,
      Producers.QueuingSystem.GetTicketsWaitingForServiceResponse
    >,
    callback: Producers.ICallback<Producers.QueuingSystem.GetTicketsWaitingForServiceResponse>
  ) {
    const { data, meta } =
      await this.listTicketsWaitingForServiceController.execute({
        serviceIds: call.request.getServiceIdsList(),
        organizationId: Consumers.Client.getOrganizationId(call),
      })

    const response =
      new Producers.QueuingSystem.GetTicketsWaitingForServiceResponse()

    if (data)
      response.setDataList(
        data.map(({ waitingFor, tickets }) =>
          new Producers.QueuingSystem.GetTicketsWaitingForServiceResponse.ServiceTickets()
            .setWaitingFor(waitingFor)
            .setTicketsList(tickets.map(TicketsMapper.toRPC))
        )
      )

    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }
}
