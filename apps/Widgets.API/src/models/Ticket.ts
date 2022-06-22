import { Field, ID, ObjectType } from 'type-graphql'

@ObjectType()
export class Ticket {
  @Field(_ => ID)
  id: string

  @Field()
  status: string

  @Field()
  displayCode: string

  @Field()
  serviceId: string

  @Field()
  locationId: string

  @Field()
  customerId: string

  @Field()
  createdAt: Date
}
