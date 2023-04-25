/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Producers } from '@turnly/grpc'
import { Client } from '@turnly/grpc/dist/consumers'
import { ResourceNotFoundException } from '@turnly/observability'
import type { SearchAvailableLocationsForServingController } from 'locations/search-available-locations-for-serving'
import { LocationsMapper } from 'locations/shared/infrastructure/grpc/locations-mapper.grpc'

export class SearchAvailableLocationsForServingServer {
  public constructor(
    private readonly searchAvailableLocationsForServingController: SearchAvailableLocationsForServingController
  ) {}

  @Producers.CallHandler(
    Producers.BranchManagement.SearchAvailableLocationsForServingResponse
  )
  public async execute(
    call: Producers.ServerUnaryCall<
      Producers.BranchManagement.SearchAvailableLocationsForServingRequest,
      Producers.BranchManagement.SearchAvailableLocationsForServingResponse
    >,
    callback: Producers.ICallback<Producers.BranchManagement.SearchAvailableLocationsForServingResponse>
  ) {
    const { data, meta } =
      await this.searchAvailableLocationsForServingController.execute({
        searchQuery: call.request.getSearchQuery(),
        country: call.request.getCountry(),
        latitude: parseFloat(call.request.getLatitude() || '0'),
        longitude: parseFloat(call.request.getLongitude() || '0'),
        limit: call.request.getLimit(),
        offset: call.request.getOffset(),
        organizationId: Client.getOrganizationId(call),
      })

    const response =
      new Producers.BranchManagement.SearchAvailableLocationsForServingResponse()
    const locations = data?.map(location => LocationsMapper.toRPC(location))

    if (!locations?.length) throw new ResourceNotFoundException()

    response.setDataList(locations)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }
}
