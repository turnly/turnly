/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Producers } from '@turnly/rpc'
import { Client } from '@turnly/rpc/dist/consumers'
import type { GetServicesOfOneLocationController } from 'Services/GetServicesOfOneLocation'
import { ServicesMapper } from 'Services/Shared/infrastructure/grpc/ServicesMapper'

export class GetServicesOfOneLocationServer {
  public constructor(
    private readonly getServicesOfOneLocationController: GetServicesOfOneLocationController
  ) {}

  @Producers.CallHandler(
    Producers.BranchManagement.GetServicesOfOneLocationResponse
  )
  public async execute(
    call: Producers.ServerUnaryCall<
      Producers.BranchManagement.GetServicesOfOneLocationRequest,
      Producers.BranchManagement.GetServicesOfOneLocationResponse
    >,
    callback: Producers.ICallback<Producers.BranchManagement.GetServicesOfOneLocationResponse>
  ) {
    const { data, meta } =
      await this.getServicesOfOneLocationController.execute({
        locationId: call.request.getLocationId(),
        organizationId: Client.getOrganizationId(call),
      })

    const response =
      new Producers.BranchManagement.GetServicesOfOneLocationResponse()

    if (data) response.setDataList(data.map(ServicesMapper.toRPC))

    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }
}
