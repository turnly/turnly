import { Field } from 'models/Field'
import { Query, Resolver } from 'type-graphql'

@Resolver(Field)
export class FieldsResolver {
  @Query(_ => String)
  hello() {
    return 'Hello from Fields'
  }
}
