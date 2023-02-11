/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { IContext } from '@types'
import { LocationModel, LocationsArgs } from 'models/LocationModel'
import { Args, Authorized, Ctx, Query, Resolver } from 'type-graphql'

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
