import { Field, ID, ObjectType } from 'type-graphql'

@ObjectType()
export class Service {
  @Field(_ => ID)
  id: string
}
