/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { OrderTypes } from '@turnly/core'
import { Consumers, Producers } from '@turnly/grpc'
import { TicketsMapper } from 'tickets/shared/infrastructure/tickets-to-grpc.mapper'

import { ListTicketsForSignageDisplaysController } from './list-tickets-for-signage-displays.controller'
import { ClearTicketsAfter } from './list-tickets-for-signage-displays.query'

export class ListTicketsForSignageDisplaysServer {
  public constructor(
    private readonly listTicketsForSignageDisplaysController: ListTicketsForSignageDisplaysController
  ) {}

  @Producers.CallHandler(
    Producers.QueuingSystem.ListTicketsForSignageDisplaysResponse
  )
  public async execute(
    call: Producers.ServerUnaryCall<
      Producers.QueuingSystem.ListTicketsForSignageDisplaysRequest,
      Producers.QueuingSystem.ListTicketsForSignageDisplaysResponse
    >,
    callback: Producers.ICallback<Producers.QueuingSystem.ListTicketsForSignageDisplaysResponse>
  ) {
    const { data, meta } =
      await this.listTicketsForSignageDisplaysController.execute({
        locationId: call.request.getLocationId(),
        serviceIds: call.request.getServiceIdsList(),
        order: call.request.getOrder() as OrderTypes,
        clearTicketsAfter:
          call.request.getClearTicketsAfter() as ClearTicketsAfter,
        limit: call.request.getLimit(),
        offset: call.request.getOffset(),
        organizationId: Consumers.Client.getOrganizationId(call),
      })

    const response =
      new Producers.QueuingSystem.ListTicketsForSignageDisplaysResponse()

    if (data) response.setDataList(data.map(TicketsMapper.toRPC))

    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }
}
