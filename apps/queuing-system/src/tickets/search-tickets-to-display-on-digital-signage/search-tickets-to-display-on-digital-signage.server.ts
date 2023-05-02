/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { OrderTypes } from '@turnly/core'
import { Consumers, Producers } from '@turnly/grpc'
import { TicketsMapper } from 'tickets/shared/infrastructure/tickets-to-grpc.mapper'

import { SearchTicketsToDisplayOnDigitalSignageController } from './search-tickets-to-display-on-digital-signage.controller'

export class SearchTicketsToDisplayOnDigitalSignageServer {
  public constructor(
    private readonly searchTicketsToDisplayOnDigitalSignageController: SearchTicketsToDisplayOnDigitalSignageController
  ) {}

  @Producers.CallHandler(
    Producers.QueuingSystem.SearchTicketsToDisplayOnDigitalSignageResponse
  )
  public async execute(
    call: Producers.ServerUnaryCall<
      Producers.QueuingSystem.SearchTicketsToDisplayOnDigitalSignageRequest,
      Producers.QueuingSystem.SearchTicketsToDisplayOnDigitalSignageResponse
    >,
    callback: Producers.ICallback<Producers.QueuingSystem.SearchTicketsToDisplayOnDigitalSignageResponse>
  ) {
    const { data, meta } =
      await this.searchTicketsToDisplayOnDigitalSignageController.execute({
        locationId: call.request.getLocationId(),
        serviceIds: call.request.getServiceIdsList(),
        order: call.request.getOrder() as OrderTypes,
        afterCalled: call.request.getAfterCalled(),
        limit: call.request.getLimit(),
        offset: call.request.getOffset(),
        organizationId: Consumers.Client.getOrganizationId(call),
      })

    const response =
      new Producers.QueuingSystem.SearchTicketsToDisplayOnDigitalSignageResponse()

    if (data) response.setDataList(data.map(TicketsMapper.toRPC))

    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }
}
