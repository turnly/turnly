import { MongoClientFactory, Startup } from '@turnly/core'

class Application extends Startup {
  /**
   * Sets up application.
   *
   * @memberof Startup
   */
  public async setup(): Promise<void> {
    await MongoClientFactory.createClient(process.env.APP_NAME as string, {
      url: process.env.MONGO_URL as string,
    })

    const { rest } = await import('presentation/rest')
    const { rpc } = await import('presentation/rpc')

    this.setupMonitoring(rest.app)

    rest.setup()
    rpc.setup()
  }
}

new Application().setup()
