import { Ticket } from 'models/Ticket'
import { Query, Resolver } from 'type-graphql'

@Resolver(Ticket)
export class TicketsResolver {
  @Query(_ => String)
  hello() {
    return 'Hello from Tickets'
  }
}
