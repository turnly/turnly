/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { LocationModel, LocationsArgs } from 'models/location.model'
import { Args, Authorized, Ctx, Query, Resolver } from 'type-graphql'

import { IContext } from '../context.type'

@Resolver(LocationModel)
export class LocationsResolver {
  @Authorized()
  @Query(() => [LocationModel])
  public async searchAvailableLocationsForServing(
    @Args()
    { searchQuery, country, latitude, longitude, limit, offset }: LocationsArgs,
    @Ctx() { dataSources }: IContext
  ) {
    return await dataSources.locations.searchAvailableLocationsForServing({
      searchQuery,
      country,
      latitude,
      longitude,
      limit,
      offset,
    })
  }
}
