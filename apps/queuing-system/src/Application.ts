import { Box, ioc, MongoClient, mongoConfig, Startup } from '@turnly/shared'
import io from 'socket.io-client'

export class Application extends Startup {
  /**
   * Sets up application.
   *
   * @memberof Startup
   */
  public async setup(): Promise<void> {
    this.setupMonitoring()
    this.setupRealtime()

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

  private setupRealtime() {
    Box.register({
      realtime: ioc.asFunction(() =>
        io(process.env.REALTIME_API_URL as string)
      ),
    })
  }
}
