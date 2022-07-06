/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { IContext } from '@types'
import { ServiceModel } from 'models/ServiceModel'
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
    @Ctx() { req: { organizationId }, dataSources }: IContext
  ) {
    return await dataSources.services.getLocationServices(
      locationId,
      organizationId
    )
  }

  @FieldResolver(() => Int)
  public async ticketsWaiting(
    @Root() service: ServiceModel,
    @Ctx() { req: { organizationId, customer }, dataSources }: IContext
  ): Promise<number> {
    return await dataSources.services.getTicketsWaitingForService(
      service.id,
      customer.id,
      organizationId
    )
  }
}
