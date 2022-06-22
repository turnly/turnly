import { Field, ID, ObjectType } from 'type-graphql'

@ObjectType()
export class Service {
  @Field(_ => ID)
  id: string

  @Field()
  name: string

  @Field()
  description: string

  @Field()
  locationId: string

  @Field()
  tickets: number
}
