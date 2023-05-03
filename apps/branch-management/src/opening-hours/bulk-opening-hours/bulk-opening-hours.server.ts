/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Consumers, Producers } from '@turnly/grpc'
import { OpeningHoursMapper } from 'opening-hours/shared/infrastructure/opening-hours-to-grpc.mapper'

import { BulkOpeningHoursController } from './bulk-opening-hours.controller'

export class BulkOpeningHoursServer {
  public constructor(
    private readonly bulkOpeningHoursController: BulkOpeningHoursController
  ) {}

  @Producers.CallHandler(Producers.BranchManagement.CreateResponse)
  public async execute(
    call: Producers.ServerUnaryCall<
      Producers.BranchManagement.CreateRequest,
      Producers.BranchManagement.CreateResponse
    >,
    callback: Producers.ICallback<Producers.BranchManagement.CreateResponse>
  ) {
    const openingHours = call.request
      .getOpeningHoursList()
      .map(openingHour => openingHour.toObject())

    const { data, meta } = await this.bulkOpeningHoursController.execute({
      openingHours,
      locationId: call.request.getLocationId(),
      organizationId: Consumers.Client.getOrganizationId(call),
    })

    const response = new Producers.BranchManagement.CreateResponse()

    if (data) response.setDataList(data.map(OpeningHoursMapper.toRPC))

    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }
}
