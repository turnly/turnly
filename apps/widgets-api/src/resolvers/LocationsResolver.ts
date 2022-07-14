/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { IContext } from '@types'
import { LocationModel, LocationsArgs } from 'models/LocationModel'
import { Args, Authorized, Ctx, Query, Resolver } from 'type-graphql'

@Resolver(LocationModel)
export class LocationsResolver {
  @Authorized()
  @Query(() => [LocationModel])
  public async findLocations(
    @Args()
    { searchQuery, country, latitude, longitude, limit, offset }: LocationsArgs,
    @Ctx() { dataSources }: IContext
  ) {
    return await dataSources.locations.find({
      searchQuery,
      country,
      latitude,
      longitude,
      limit,
      offset,
    })
  }
}
