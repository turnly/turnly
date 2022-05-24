import { BaseRoutes } from '@turnly/core'
import { TicketsRoutes } from 'Tickets/infrastructure/api/presentation/rest/TicketsRoutes'
import { TicketFactory } from 'Tickets/infrastructure/factories/TicketFactory'

export class Routes extends BaseRoutes {
  public constructor() {
    super()
    this.setup()
  }

  public override setup() {
    this.router.use(
      '/tickets',
      new TicketsRoutes(TicketFactory.getController()).router
    )
  }
}
