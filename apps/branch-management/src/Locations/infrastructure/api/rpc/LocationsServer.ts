/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ResourceNotFoundException } from '@turnly/common'
import { Producers } from '@turnly/rpc'
import { Client } from '@turnly/rpc/dist/consumers'

import { LocationsController } from '../controllers/LocationsController'
import { LocationsMapper } from './LocationsMapper'

export class LocationsServer extends Producers.ServerImplementation<Producers.BranchManagement.ILocationsServer> {
  public constructor(
    private readonly locationsController: LocationsController
  ) {
    super()
  }

  @Producers.CallHandler(Producers.BranchManagement.GetLocationResponse)
  public async getOne(
    call: Producers.ServerUnaryCall<
      Producers.BranchManagement.GetLocationRequest,
      Producers.BranchManagement.GetLocationResponse
    >,
    callback: Producers.ICallback<Producers.BranchManagement.GetLocationResponse>
  ) {
    const { data, meta } = await this.locationsController.getOne({
      id: call.request.getId(),
      organizationId: Client.getOrganizationId(call),
    })

    const response = new Producers.BranchManagement.GetLocationResponse()
    const location = LocationsMapper.toRPC(data)

    response.setData(location)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }

  @Producers.CallHandler(Producers.BranchManagement.FindLocationsResponse)
  public async find(
    call: Producers.ServerUnaryCall<
      Producers.BranchManagement.FindLocationsRequest,
      Producers.BranchManagement.FindLocationsResponse
    >,
    callback: Producers.ICallback<Producers.BranchManagement.FindLocationsResponse>
  ) {
    const { data, meta } = await this.locationsController.find({
      searchQuery: call.request.getFindQuery(),
      country: call.request.getCountry(),
      latitude: parseFloat(call.request.getLatitude() || '0'),
      longitude: parseFloat(call.request.getLongitude() || '0'),
      limit: call.request.getLimit(),
      offset: call.request.getOffset(),
      organizationId: Client.getOrganizationId(call),
    })

    const response = new Producers.BranchManagement.FindLocationsResponse()
    const locations = data?.map(location => LocationsMapper.toRPC(location))

    if (!locations?.length) throw new ResourceNotFoundException()

    response.setDataList(locations)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }

  public get implementation() {
    return {
      getOne: this.getOne.bind(this),
      find: this.find.bind(this),
    }
  }
}
