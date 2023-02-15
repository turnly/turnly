/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Producers } from '@turnly/rpc'
import { Client } from '@turnly/rpc/dist/consumers'
import type { ListServicesOfOneLocationController } from 'Services/ListServicesOfOneLocation'
import { ServicesMapper } from 'Services/Shared/infrastructure/grpc/ServicesMapper'

export class ListServicesOfOneLocationServer {
  public constructor(
    private readonly listServicesOfOneLocationController: ListServicesOfOneLocationController
  ) {}

  @Producers.CallHandler(
    Producers.BranchManagement.ListServicesOfOneLocationResponse
  )
  public async execute(
    call: Producers.ServerUnaryCall<
      Producers.BranchManagement.ListServicesOfOneLocationRequest,
      Producers.BranchManagement.ListServicesOfOneLocationResponse
    >,
    callback: Producers.ICallback<Producers.BranchManagement.ListServicesOfOneLocationResponse>
  ) {
    const { data, meta } =
      await this.listServicesOfOneLocationController.execute({
        locationId: call.request.getLocationId(),
        organizationId: Client.getOrganizationId(call),
      })

    const response =
      new Producers.BranchManagement.ListServicesOfOneLocationResponse()

    if (data) response.setDataList(data.map(ServicesMapper.toRPC))

    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }
}
