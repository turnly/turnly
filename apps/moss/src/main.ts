import { Database, Startup } from '@turnly/core'

class Application extends Startup {
  /**
   * Sets up application.
   *
   * @memberof Startup
   */
  public async setup(): Promise<void> {
    await Database.connect()

    const { rest } = await import('presentation/rest')
    const { rpc } = await import('presentation/rpc')

    this.setupMonitoring(rest.app)

    rest.setup()
    rpc.setup()
  }
}

new Application().setup()
