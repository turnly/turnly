import { Database, Startup } from '@turnly/core'
import { Producers } from '@turnly/rpc'
import { http } from 'presentations/http/http'

class Main extends Startup {
  /**
   * Sets up application.
   *
   * @memberof Startup
   */
  public async setup(): Promise<void> {
    this.setupMonitoring(http.app)

    await Database.connect()

    const { rpcOptions } = await import('./presentations/rpc/rpc')

    const rpc = new Producers.Server(rpcOptions)

    http.setup()
    rpc.setup()
  }
}

new Main().setup()
