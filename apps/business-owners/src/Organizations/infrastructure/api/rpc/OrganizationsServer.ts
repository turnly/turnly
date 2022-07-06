/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { Producers } from '@turnly/rpc'

import { OrganizationsController } from '../controllers/OrganizationsController'
import { OrganizationsMapper } from './OrganizationsMapper'

export class OrganizationsServer extends Producers.ServerImplementation<Producers.BusinessOwners.IOrganizationsServer> {
  public constructor(
    private readonly organizationsController: OrganizationsController
  ) {
    super()
  }

  @Producers.CallHandler(Producers.BusinessOwners.GetOrganizationResponse)
  public async getOne(
    call: Producers.ServerUnaryCall<
      Producers.BusinessOwners.GetOrganizationRequest,
      Producers.BusinessOwners.GetOrganizationResponse
    >,
    callback: Producers.ICallback<Producers.BusinessOwners.GetOrganizationResponse>
  ) {
    const { data, meta } = await this.organizationsController.getOne({
      id: call.request.getId(),
    })

    const response = new Producers.BusinessOwners.GetOrganizationResponse()
    const organization = OrganizationsMapper.toRPC(data)

    response.setData(organization)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }

  @Producers.CallHandler(Producers.BusinessOwners.GetOrganizationResponse)
  public async getBySubdomain(
    call: Producers.ServerUnaryCall<
      Producers.BusinessOwners.GetOrganizationBySubdomainRequest,
      Producers.BusinessOwners.GetOrganizationResponse
    >,
    callback: Producers.ICallback<Producers.BusinessOwners.GetOrganizationResponse>
  ) {
    const { data, meta } = await this.organizationsController.getBySubdomain({
      subdomain: call.request.getSubdomain(),
    })

    const response = new Producers.BusinessOwners.GetOrganizationResponse()
    const organization = OrganizationsMapper.toRPC(data)

    response.setData(organization)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }

  public get implementation() {
    return {
      getOne: this.getOne.bind(this),
      getBySubdomain: this.getBySubdomain.bind(this),
    }
  }
}
