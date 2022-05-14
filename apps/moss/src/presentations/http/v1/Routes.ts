import { BaseRoutes } from '@turnly/core'

import { RouterFactory } from './RouterFactory'

export class Routes extends BaseRoutes {
  private readonly _routerFactory = new RouterFactory()

  public constructor() {
    super()
    this.setup()
  }

  public override setup() {
    /**
     * Authentication routes
     *
     * @description Public and private routes for everything related to user authentication and authorization.
     */
    // this.router.use('/users/auth', this._routerFactory.getUserRouter())
  }
}
