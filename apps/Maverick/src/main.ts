import { MongoClientFactory, mongoConfig, Startup } from '@turnly/core'

class Application extends Startup {
  /**
   * Sets up application.
   *
   * @memberof Startup
   */
  public async setup(): Promise<void> {
    await MongoClientFactory.createClient(mongoConfig.namespace, {
      url: mongoConfig.uri,
    })

    const { rest } = await import('presentation/rest')
    const { rpc } = await import('presentation/rpc')

    this.setupMonitoring(rest.app)

    rest.setup()
    rpc.setup()
  }
}

new Application().setup()
