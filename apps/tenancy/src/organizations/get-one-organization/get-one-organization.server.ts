/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Producers } from '@turnly/grpc'
import { OrganizationsMapper } from 'organizations/shared/infrastructure/organizations-to-grpc.mapper'

import { GetOneOrganizationController } from './get-one-organization.controller'

export class GetOneOrganizationServer {
  public constructor(
    private readonly getOneOrganizationController: GetOneOrganizationController
  ) {}

  @Producers.CallHandler(Producers.Tenancy.GetOrganizationResponse)
  public async execute(
    call: Producers.ServerUnaryCall<
      Producers.Tenancy.GetOrganizationRequest,
      Producers.Tenancy.GetOrganizationResponse
    >,
    callback: Producers.ICallback<Producers.Tenancy.GetOrganizationResponse>
  ) {
    const { data, meta } = await this.getOneOrganizationController.execute({
      id: call.request.getId(),
    })

    const response = new Producers.Tenancy.GetOrganizationResponse()
    const organization = OrganizationsMapper.toRPC(data)

    response.setData(organization)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }
}
