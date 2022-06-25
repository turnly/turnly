import { Field, ID, InputType, Int, ObjectType } from 'type-graphql'

import { Customer } from './Customer'
import { Location } from './Location'
import { Service } from './Service'

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
export class Ticket {
  @Field(() => ID)
  id: string

  @Field()
  status: string

  @Field()
  displayCode: string

  @Field(() => ID)
  serviceId: string

  @Field(() => Service)
  service: Service

  @Field(() => ID)
  locationId: string

  @Field(() => Location)
  location: Location

  @Field(() => ID)
  customerId: string

  @Field(() => Customer)
  customer: Customer

  @Field(() => Int)
  beforeYours: number

  @Field(() => String, { nullable: true })
  calledTo: string | null
}
