/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { IContext } from '@types'
import { FieldModel } from 'models/FieldModel'
import { Arg, Authorized, Ctx, ID, Query, Resolver } from 'type-graphql'

@Resolver(FieldModel)
export class FieldsResolver {
  @Authorized()
  @Query(() => [FieldModel])
  public async getServiceFields(
    @Arg('serviceId', () => ID) serviceId: string,
    @Ctx() { dataSources }: IContext
  ): Promise<FieldModel[]> {
    return await dataSources.fields.findCustomerFieldsByService(serviceId)
  }
}
