import { BaseRoutes } from '@turnly/core'

export class Routes extends BaseRoutes {
  public constructor() {
    super()
    this.setup()
  }

  public override setup() {
    /**
     * Apps routes
     *
     * @description Endpoints partially public to be consumed by the widget or apps.
     */
    // this.router.use('/tickets', new TicketsRoutes(TicketsFactory.getController()).router)
  }
}
