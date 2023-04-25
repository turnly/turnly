/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Producers } from '@turnly/grpc'
import { OrganizationsMapper } from 'organizations/shared/infrastructure/grpc/organizations-mapper.grpc'

import { GetOneOrganizationController } from './get-one-organization.controller'

export class GetOneOrganizationServer {
  public constructor(
    private readonly getOneOrganizationController: GetOneOrganizationController
  ) {}

  @Producers.CallHandler(Producers.BusinessManagement.GetOrganizationResponse)
  public async execute(
    call: Producers.ServerUnaryCall<
      Producers.BusinessManagement.GetOrganizationRequest,
      Producers.BusinessManagement.GetOrganizationResponse
    >,
    callback: Producers.ICallback<Producers.BusinessManagement.GetOrganizationResponse>
  ) {
    const { data, meta } = await this.getOneOrganizationController.execute({
      id: call.request.getId(),
    })

    const response = new Producers.BusinessManagement.GetOrganizationResponse()
    const organization = OrganizationsMapper.toRPC(data)

    response.setData(organization)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }
}