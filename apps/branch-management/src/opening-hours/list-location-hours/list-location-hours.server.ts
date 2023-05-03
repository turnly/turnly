/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Consumers, Producers } from '@turnly/grpc'
import { OpeningHoursMapper } from 'opening-hours/shared/infrastructure/opening-hours-to-grpc.mapper'

import { ListLocationHoursController } from './list-location-hours.controller'

export class ListLocationHoursServer {
  public constructor(
    private readonly listLocationHoursController: ListLocationHoursController
  ) {}

  @Producers.CallHandler(Producers.BranchManagement.ListLocationHoursResponse)
  public async execute(
    call: Producers.ServerUnaryCall<
      Producers.BranchManagement.ListLocationHoursRequest,
      Producers.BranchManagement.ListLocationHoursResponse
    >,
    callback: Producers.ICallback<Producers.BranchManagement.ListLocationHoursResponse>
  ) {
    const { data, meta } = await this.listLocationHoursController.execute({
      locationId: call.request.getLocationId(),
      organizationId: Consumers.Client.getOrganizationId(call),
    })

    const response = new Producers.BranchManagement.ListLocationHoursResponse()

    if (data) response.setDataList(data.map(OpeningHoursMapper.toRPC))

    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }
}
