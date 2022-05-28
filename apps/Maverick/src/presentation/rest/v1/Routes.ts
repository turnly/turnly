import { BaseRoutes } from '@turnly/shared'

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
    // this.router.use('/integrations', new IntegrationsRoutes(IntegrationsFactory.getController()).router)
  }
}
