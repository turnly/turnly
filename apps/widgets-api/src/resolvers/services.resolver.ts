/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { IContext } from '@types'
import { ServiceModel } from 'models/service.model'
import {
  Arg,
  Authorized,
  Ctx,
  FieldResolver,
  ID,
  Int,
  Query,
  Resolver,
  Root,
} from 'type-graphql'

@Resolver(ServiceModel)
export class ServicesResolver {
  @Authorized()
  @Query(() => [ServiceModel])
  public async getLocationServices(
    @Arg('locationId', () => ID) locationId: string,
    @Ctx() { dataSources }: IContext
  ) {
    return await dataSources.services.getLocationServices(locationId)
  }

  @FieldResolver(() => Int)
  public async ticketsWaiting(
    @Root() service: ServiceModel,
    @Ctx() { req: { customer }, dataSources }: IContext
  ): Promise<number> {
    return await dataSources.services.getTicketsWaitingForService(
      service.id,
      customer.id
    )
  }
}
