/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Consumers, Producers } from '@turnly/grpc'
import { LocationsMapper } from 'locations/shared/infrastructure/locations-to-grpc.mapper'

import { GetLocationReadyForServingController } from './get-location-ready-for-serving.controller'

export class GetLocationReadyForServingServer {
  public constructor(
    private readonly getLocationReadyForServingController: GetLocationReadyForServingController
  ) {}

  @Producers.CallHandler(
    Producers.BranchManagement.GetLocationReadyForServingResponse
  )
  public async execute(
    call: Producers.ServerUnaryCall<
      Producers.BranchManagement.GetLocationReadyForServingRequest,
      Producers.BranchManagement.GetLocationReadyForServingResponse
    >,
    callback: Producers.ICallback<Producers.BranchManagement.GetLocationReadyForServingResponse>
  ) {
    const { data, meta } =
      await this.getLocationReadyForServingController.execute({
        id: call.request.getId(),
        serviceId: call.request.getServiceId(),
        organizationId: Consumers.Client.getOrganizationId(call),
      })

    const response =
      new Producers.BranchManagement.GetLocationReadyForServingResponse()
    const location = LocationsMapper.toRPC(data)

    response.setData(location)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }
}
