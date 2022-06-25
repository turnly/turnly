import { Field, ID, Int, ObjectType } from 'type-graphql'

@ObjectType()
export class Service {
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
