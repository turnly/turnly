/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Producers } from '@turnly/rpc'
import { Client } from '@turnly/rpc/dist/consumers'

import { ServicesController } from '../controllers/ServicesController'
import { ServicesMapper } from './ServicesMapper'

export class ServicesServer extends Producers.ServerImplementation<Producers.BranchManagement.IServicesServer> {
  public constructor(private readonly servicesController: ServicesController) {
    super()
  }

  @Producers.CallHandler(Producers.BranchManagement.GetServiceResponse)
  public async getOne(
    call: Producers.ServerUnaryCall<
      Producers.BranchManagement.GetServiceRequest,
      Producers.BranchManagement.GetServiceResponse
    >,
    callback: Producers.ICallback<Producers.BranchManagement.GetServiceResponse>
  ) {
    const { data, meta } = await this.servicesController.getOne({
      id: call.request.getId(),
      organizationId: Client.getOrganizationId(call),
    })

    const response = new Producers.BranchManagement.GetServiceResponse()
    const service = ServicesMapper.toRPC(data)

    response.setData(service)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }

  @Producers.CallHandler(Producers.BranchManagement.FindByLocationResponse)
  public async findByLocation(
    call: Producers.ServerUnaryCall<
      Producers.BranchManagement.FindByLocationRequest,
      Producers.BranchManagement.FindByLocationResponse
    >,
    callback: Producers.ICallback<Producers.BranchManagement.FindByLocationResponse>
  ) {
    const { data, meta } = await this.servicesController.getServicesByLocation({
      locationId: call.request.getLocationId(),
      organizationId: Client.getOrganizationId(call),
    })

    const response = new Producers.BranchManagement.FindByLocationResponse()

    if (data) response.setDataList(data.map(ServicesMapper.toRPC))

    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }

  public get implementation() {
    return {
      getOne: this.getOne.bind(this),
      findByLocation: this.findByLocation.bind(this),
    }
  }
}
