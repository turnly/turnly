/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Producers } from '@turnly/grpc'

import { ListMyOrganizationsController } from './list-my-organizations.controller'

export class ListMyOrganizationsServer {
  public constructor(
    private readonly listMyOrganizationsController: ListMyOrganizationsController
  ) {}

  @Producers.CallHandler(Producers.Tenancy.ListMyOrganizationsResponse)
  public async execute(
    call: Producers.ServerUnaryCall<
      Producers.Tenancy.ListMyOrganizationsRequest,
      Producers.Tenancy.ListMyOrganizationsResponse
    >,
    callback: Producers.ICallback<Producers.Tenancy.ListMyOrganizationsResponse>
  ) {
    const { meta } = await this.listMyOrganizationsController.execute({
      id: '',
    })

    const response = new Producers.Tenancy.ListMyOrganizationsResponse()
    // const organization = OrganizationsMapper.toRPC(data)

    // response.setData(organization)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }
}
