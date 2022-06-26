import { MongoClient, mongoConfig, Startup } from '@turnly/shared'

export class Application extends Startup {
  /**
   * Sets up application.
   *
   * @memberof Startup
   */
  public async setup(): Promise<void> {
    this.setupMonitoring()

    await this.setupDatabase()
    await this.setupPresentations()
  }

  private async setupPresentations(): Promise<void> {
    const { rpc } = await import('./RPCServer')

    rpc.setup()
  }

  private async setupDatabase(): Promise<void> {
    await new MongoClient(mongoConfig).connect()
  }
}
