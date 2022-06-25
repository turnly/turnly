import { Field, ID, InputType, Int, ObjectType } from 'type-graphql'

import { CustomerModel } from './CustomerModel'
import { LocationModel } from './LocationModel'
import { ServiceModel } from './ServiceModel'

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

@InputType()
export class TicketInput {
  @Field(() => ID)
  serviceId: string

  @Field(() => ID)
  locationId: string

  @Field(() => [Answers], { nullable: true })
  answers: Answers[]

  @Field(() => [Extra], { nullable: true })
  extra: Extra[]
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
  calledTo: string | null
}
