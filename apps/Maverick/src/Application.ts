import { MongoClientFactory, mongoConfig, Startup } from '@turnly/shared'

export class Application extends Startup {
  /**
   * Sets up application.
   *
   * @memberof Startup
   */
  public async setup(): Promise<void> {
    await this.setupDatabase()

    const { rest } = await import('presentation/rest')
    const { rpc } = await import('presentation/rpc')

    this.setupMonitoring(rest.app)

    rest.setup()
    rpc.setup()
  }

  public async setupDatabase(): Promise<void> {
    await MongoClientFactory.createClient(mongoConfig.namespace, {
      url: mongoConfig.uri,
    })
  }
}
