/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ArgsType, Field, Float, ID, Int, ObjectType } from 'type-graphql'

@ObjectType()
export class LocationModel {
  @Field(() => ID)
  id: string

  @Field()
  name: string

  @Field()
  address: string

  @Field()
  country: string

  @Field()
  longitude: number

  @Field()
  latitude: number
}

@ArgsType()
export class LocationsArgs {
  @Field(() => ID, { nullable: true })
  searchQuery: string

  @Field(() => String, { nullable: true })
  country: string

  @Field(() => Float, { nullable: true })
  latitude: number

  @Field(() => Float, { nullable: true })
  longitude: number

  @Field(() => Int, { nullable: true })
  limit: number

  @Field(() => Int, { nullable: true })
  offset: number
}
