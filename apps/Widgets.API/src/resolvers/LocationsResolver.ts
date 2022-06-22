import { Location } from 'models/Location'
import { Query, Resolver } from 'type-graphql'

@Resolver(Location)
export class LocationsResolver {
  @Query(_ => String)
  hello() {
    return 'Hello from Locations'
  }
}
