/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Producers } from '@turnly/grpc'
import { OrganizationsMapper } from 'organizations/shared/infrastructure/organizations-to-grpc.mapper'

import { GetOrganizationBySubdomainController } from './get-organization-by-subdomain.controller'

export class GetOrganizationBySubdomainServer {
  public constructor(
    private readonly getOrganizationBySubdomainController: GetOrganizationBySubdomainController
  ) {}

  @Producers.CallHandler(Producers.Tenancy.GetOrganizationResponse)
  public async execute(
    call: Producers.ServerUnaryCall<
      Producers.Tenancy.GetOrganizationBySubdomainRequest,
      Producers.Tenancy.GetOrganizationResponse
    >,
    callback: Producers.ICallback<Producers.Tenancy.GetOrganizationResponse>
  ) {
    const { data, meta } =
      await this.getOrganizationBySubdomainController.execute({
        subdomain: call.request.getSubdomain(),
      })

    const response = new Producers.Tenancy.GetOrganizationResponse()
    const organization = OrganizationsMapper.toRPC(data)

    response.setData(organization)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }
}
