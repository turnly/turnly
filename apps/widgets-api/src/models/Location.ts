import { Field, ID, ObjectType } from 'type-graphql'

@ObjectType()
export class Location {
  @Field(_ => ID)
  id: string
}
