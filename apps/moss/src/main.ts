import { Database, Startup } from '@turnly/core'
import { Producers } from '@turnly/rpc'

class Application extends Startup {
  /**
   * Sets up application.
   *
   * @memberof Startup
   */
  public async setup(): Promise<void> {
    await Database.connect()

    const { rest } = await import('presentation/rest')
    const { rpcServerOptions } = await import('presentation/rpc')

    const rpc = new Producers.Server(rpcServerOptions)

    this.setupMonitoring(rest.app)

    rest.setup()
    rpc.setup()
  }
}

new Application().setup()
