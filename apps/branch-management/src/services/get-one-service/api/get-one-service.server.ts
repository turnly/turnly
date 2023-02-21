/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Producers } from '@turnly/grpc'
import { Client } from '@turnly/grpc/dist/consumers'
import type { GetOneServiceController } from 'services/get-one-service'
import { ServicesMapper } from 'services/shared/infrastructure/grpc/services-mapper.grpc'

export class GetOneServiceServer {
  public constructor(
    private readonly getOneServiceController: GetOneServiceController
  ) {}

  @Producers.CallHandler(Producers.BranchManagement.GetServiceResponse)
  public async execute(
    call: Producers.ServerUnaryCall<
      Producers.BranchManagement.GetServiceRequest,
      Producers.BranchManagement.GetServiceResponse
    >,
    callback: Producers.ICallback<Producers.BranchManagement.GetServiceResponse>
  ) {
    const { data, meta } = await this.getOneServiceController.execute({
      id: call.request.getId(),
      organizationId: Client.getOrganizationId(call),
    })

    const response = new Producers.BranchManagement.GetServiceResponse()
    const service = ServicesMapper.toRPC(data)

    response.setData(service)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }
}
