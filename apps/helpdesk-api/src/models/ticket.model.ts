/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ArgsType, Field, ID, InputType, Int, ObjectType } from 'type-graphql'

import { AnswerModel } from './answer.model'
import { CustomerModel } from './customer.model'
import { FieldModel } from './field.model'
import { LocationModel } from './location.model'
import { ServiceModel } from './service.model'

@InputType()
export class Answers {
  @Field()
  fieldId: string

  @Field()
  value: string
}

@InputType()
export class Extra {
  @Field()
  key: string

  @Field()
  value: string
}

@ObjectType()
export class TicketModel {
  @Field(() => ID)
  id: string

  @Field()
  status: string

  @Field()
  displayCode: string

  @Field(() => ID)
  serviceId: string

  @Field(() => ServiceModel)
  service: ServiceModel

  @Field(() => [AnswerModel], { nullable: true })
  answers: AnswerModel[]

  @Field(() => [FieldModel], { nullable: true })
  fields: FieldModel[]

  @Field(() => ID)
  locationId: string

  @Field(() => LocationModel)
  location: LocationModel

  @Field(() => ID)
  customerId: string

  @Field(() => CustomerModel)
  customer: CustomerModel

  @Field(() => Int)
  beforeYours: number

  @Field(() => String, { nullable: true })
  calledToDesk: string | null
}

@ArgsType()
export class FindTicketsByLocationArgs {
  @Field(() => String, { nullable: true })
  searchQuery: string

  @Field(() => String, { nullable: true })
  status: string

  @Field(() => ID)
  locationId: string

  @Field(() => [ID], { nullable: true })
  serviceIds: string[]
}
