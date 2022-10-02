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

export class LocationsServer extends Producers.ServerImplementation<Producers.AssistanceCenters.ILocationsServer> {
  public constructor(
    private readonly locationsController: LocationsController
  ) {
    super()
  }

  @Producers.CallHandler(Producers.AssistanceCenters.GetLocationResponse)
  public async getOne(
    call: Producers.ServerUnaryCall<
      Producers.AssistanceCenters.GetLocationRequest,
      Producers.AssistanceCenters.GetLocationResponse
    >,
    callback: Producers.ICallback<Producers.AssistanceCenters.GetLocationResponse>
  ) {
    const { data, meta } = await this.locationsController.getOne({
      id: call.request.getId(),
      organizationId: Client.getOrganizationId(call),
    })

    const response = new Producers.AssistanceCenters.GetLocationResponse()
    const location = LocationsMapper.toRPC(data)

    response.setData(location)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }

  @Producers.CallHandler(Producers.AssistanceCenters.FindLocationsResponse)
  public async find(
    call: Producers.ServerUnaryCall<
      Producers.AssistanceCenters.FindLocationsRequest,
      Producers.AssistanceCenters.FindLocationsResponse
    >,
    callback: Producers.ICallback<Producers.AssistanceCenters.FindLocationsResponse>
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

    const response = new Producers.AssistanceCenters.FindLocationsResponse()
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
