import { MongoClientFactory, mongoConfig, Startup } from '@turnly/core'

export class Application extends Startup {
  /**
   * Sets up application.
   *
   * @memberof Startup
   */
  public async setup(): Promise<void> {
    await this.setupDatabase()

    const { rest } = await import('presentation/rest')

    this.setupMonitoring(rest.app)

    rest.setup()
  }

  public async setupDatabase(): Promise<void> {
    await MongoClientFactory.createClient(mongoConfig.namespace, {
      url: mongoConfig.uri,
    })
  }
}
