/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Producers } from '@turnly/grpc'
import { Client } from '@turnly/grpc/dist/consumers'
import { TicketsMapper } from 'tickets/shared/infrastructure/grpc/TicketsMapper'

import { GetTicketsWaitingForServiceController } from './get-tickets-waiting-for-service.controller'

export class GetTicketsWaitingForServiceServer {
  public constructor(
    private readonly getTicketsWaitingForServiceController: GetTicketsWaitingForServiceController
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
      await this.getTicketsWaitingForServiceController.execute({
        serviceIds: call.request.getServiceIdsList(),
        organizationId: Client.getOrganizationId(call),
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
