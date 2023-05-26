/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import {
  GetLocationReadyForServingRequest,
  GetLocationRequest,
  LocationsClient,
  SearchAvailableLocationsForServingRequest,
} from '../../../producers/branch-management'
import { Client } from '../../common/base.client'
import type { ClientConfig } from '../../common/client-options.type'
import { promisify } from '../../common/promisify.util'
import {
  IGetLocationReadyForServingRequest,
  IGetLocationReadyForServingResponse,
  IGetLocationRequest,
  IGetLocationResponse,
  ILocationsClient,
  ISearchAvailableLocationsForServingRequest,
  ISearchAvailableLocationsForServingResponse,
} from './locations.type'

export class Locations
  extends Client<LocationsClient>
  implements ILocationsClient
{
  public constructor(config?: ClientConfig) {
    super(LocationsClient, {
      internalAddress: 'branch-management.turnly.local',
      ...config,
    })
  }

  public async searchAvailableLocationsForServing(
    request: ISearchAvailableLocationsForServingRequest
  ): Promise<ISearchAvailableLocationsForServingResponse> {
    const req = new SearchAvailableLocationsForServingRequest()
      .setSearchQuery(request.searchQuery)
      .setCountry(request.country)
      .setLatitude(request.latitude)
      .setLongitude(request.longitude)
      .setLimit(request.limit)
      .setOffset(request.offset)

    return (
      await promisify(
        this.client.searchAvailableLocationsForServing.bind(this.client)
      )(req, this.getMeta(), {})
    ).toObject()
  }

  public async getOne(
    request: IGetLocationRequest
  ): Promise<IGetLocationResponse> {
    const req = new GetLocationRequest().setId(request.id)

    return (
      await promisify(this.client.getOne.bind(this.client))(
        req,
        this.getMeta(),
        {}
      )
    ).toObject()
  }

  public async getReadyForServing(
    request: IGetLocationReadyForServingRequest
  ): Promise<IGetLocationReadyForServingResponse> {
    const req = new GetLocationReadyForServingRequest()
      .setId(request.id)
      .setServiceId(request.serviceId)

    return (
      await promisify(this.client.getReadyForServing.bind(this.client))(
        req,
        this.getMeta(),
        {}
      )
    ).toObject()
  }
}
