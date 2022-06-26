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
    this.setupStream()

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

  private setupStream() {
    Box.register({
      stream: ioc.asFunction(() => io(process.env.STREAM_API_URI as string)),
    })
  }
}
