import { Field, ID, ObjectType } from 'type-graphql'

@ObjectType()
export class Location {
  @Field(() => ID)
  id: string

  @Field()
  name: string

  @Field()
  address: string

  @Field()
  longitude: number

  @Field()
  latitude: number
}
