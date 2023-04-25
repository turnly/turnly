/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Producers } from '@turnly/grpc'
import { OrganizationsMapper } from 'organizations/shared/infrastructure/grpc/organizations-mapper.grpc'

import { GetOrganizationBySubdomainController } from './get-organization-by-subdomain.controller'

export class GetOrganizationBySubdomainServer {
  public constructor(
    private readonly getOrganizationBySubdomainController: GetOrganizationBySubdomainController
  ) {}

  @Producers.CallHandler(Producers.BusinessManagement.GetOrganizationResponse)
  public async execute(
    call: Producers.ServerUnaryCall<
      Producers.BusinessManagement.GetOrganizationBySubdomainRequest,
      Producers.BusinessManagement.GetOrganizationResponse
    >,
    callback: Producers.ICallback<Producers.BusinessManagement.GetOrganizationResponse>
  ) {
    const { data, meta } =
      await this.getOrganizationBySubdomainController.execute({
        subdomain: call.request.getSubdomain(),
      })

    const response = new Producers.BusinessManagement.GetOrganizationResponse()
    const organization = OrganizationsMapper.toRPC(data)

    response.setData(organization)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }
}
