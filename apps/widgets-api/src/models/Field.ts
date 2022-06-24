import { Field as TypeField, ID, ObjectType } from 'type-graphql'

@ObjectType()
export class Field {
  @TypeField(_ => ID)
  id: string
}
