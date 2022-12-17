/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Field, ID, Int, ObjectType } from 'type-graphql'

@ObjectType()
export class ServiceModel {
  @Field(() => ID)
  id: string

  @Field()
  name: string

  @Field(() => String, { nullable: true })
  description: string

  @Field(() => ID)
  locationId: string

  @Field(() => Int)
  ticketsWaiting: number
}
