import { Field as TypeField, ID, ObjectType } from 'type-graphql'

@ObjectType()
export class Field {
  @TypeField(() => ID)
  id: string

  @TypeField(() => String)
  label: string

  @TypeField(() => String, { nullable: true })
  description: string

  @TypeField(() => String)
  type: string

  @TypeField(() => Boolean)
  isRequired: boolean

  @TypeField(() => Boolean)
  hasProcessors: boolean
}
