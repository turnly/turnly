/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Consumers, Producers } from '@turnly/grpc'
import { OpeningHoursMapper } from 'opening-hours/shared/infrastructure/opening-hours-to-grpc.mapper'

import { SaveOpeningHoursController } from './save-opening-hours.controller'

export class SaveOpeningHoursServer {
  public constructor(
    private readonly saveOpeningHoursController: SaveOpeningHoursController
  ) {}

  @Producers.CallHandler(Producers.BranchManagement.SaveOpeningHoursResponse)
  public async execute(
    call: Producers.ServerUnaryCall<
      Producers.BranchManagement.SaveOpeningHoursRequest,
      Producers.BranchManagement.SaveOpeningHoursResponse
    >,
    callback: Producers.ICallback<Producers.BranchManagement.SaveOpeningHoursResponse>
  ) {
    const openingHours = call.request
      .getOpeningHoursList()
      .map(openingHour => openingHour.toObject())

    const { data, meta } = await this.saveOpeningHoursController.execute({
      openingHours,
      locationId: call.request.getLocationId(),
      organizationId: Consumers.Client.getOrganizationId(call),
    })

    const response = new Producers.BranchManagement.SaveOpeningHoursResponse()

    if (data) response.setDataList(data.map(OpeningHoursMapper.toRPC))

    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }
}
