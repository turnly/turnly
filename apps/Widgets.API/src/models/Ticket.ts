import { Guid } from '@turnly/common'
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
  serviceId: Guid

  @Field()
  locationId: Guid

  @Field()
  customerId: Guid

  @Field()
  createdAt: Date
}
