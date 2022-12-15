/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Field, ID, ObjectType } from 'type-graphql'

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
  longitude: string

  @Field()
  latitude: string
}
