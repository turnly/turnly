/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Producers } from '@turnly/grpc'
import { Client } from '@turnly/grpc/dist/consumers'
import type { GetOneLocationController } from 'locations/get-one-location'
import { LocationsMapper } from 'locations/shared/infrastructure/grpc/locations-mapper.grpc'

export class GetOneLocationServer {
  public constructor(
    private readonly getOneLocationController: GetOneLocationController
  ) {}

  @Producers.CallHandler(Producers.BranchManagement.GetLocationResponse)
  public async execute(
    call: Producers.ServerUnaryCall<
      Producers.BranchManagement.GetLocationRequest,
      Producers.BranchManagement.GetLocationResponse
    >,
    callback: Producers.ICallback<Producers.BranchManagement.GetLocationResponse>
  ) {
    const { data, meta } = await this.getOneLocationController.execute({
      id: call.request.getId(),
      organizationId: Client.getOrganizationId(call),
    })

    const response = new Producers.BranchManagement.GetLocationResponse()
    const location = LocationsMapper.toRPC(data)

    response.setData(location)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }
}
