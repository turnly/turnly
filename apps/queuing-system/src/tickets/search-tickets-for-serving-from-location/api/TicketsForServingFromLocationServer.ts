/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Producers } from '@turnly/grpc'
import { Client } from '@turnly/grpc/dist/consumers'
import { TicketsMapper } from 'tickets/shared/infrastructure/grpc/TicketsMapper'
import { TicketsByLocationFilters } from 'tickets/search-tickets-for-serving-from-location'

import { TicketsForServingFromLocationController } from './TicketsForServingFromLocationController'

export class TicketsForServingFromLocationServer {
  public constructor(
    private readonly ticketsForServingFromLocationController: TicketsForServingFromLocationController
  ) {}

  @Producers.CallHandler(
    Producers.QueuingSystem.GetTicketsForServingFromLocationResponse
  )
  public async execute(
    call: Producers.ServerUnaryCall<
      Producers.QueuingSystem.GetTicketsForServingFromLocationRequest,
      Producers.QueuingSystem.GetTicketsForServingFromLocationResponse
    >,
    callback: Producers.ICallback<Producers.QueuingSystem.GetTicketsForServingFromLocationResponse>
  ) {
    const { data, meta } =
      await this.ticketsForServingFromLocationController.execute({
        searchQuery: call.request.getFindQuery(),
        locationId: call.request.getLocationId(),
        serviceIds: call.request.getServiceIdsList(),
        status: call.request.getStatus() as TicketsByLocationFilters,
        organizationId: Client.getOrganizationId(call),
      })

    const response =
      new Producers.QueuingSystem.GetTicketsForServingFromLocationResponse()

    if (data) response.setDataList(data.map(TicketsMapper.toRPC))

    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }
}
