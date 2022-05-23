import {
  EventBus,
  InMemoryCommandBus,
  InMemoryQueryBus,
  MongoClientFactory,
  mongoConfig,
  Startup,
} from '@turnly/core'
import { IntegrationFactory } from 'Integrations/infrastructure/factories/IntegrationFactory'
import { Box } from 'Shared/infrastructure/dependencies'

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
    await this.setupBuses()

    rest.setup()
    rpc.setup()
  }

  public async setupBuses() {
    const queryBus = Box.resolve<InMemoryQueryBus>('queryBus')
    const commandBus = Box.resolve<InMemoryCommandBus>('commandBus')
    const eventBus = Box.resolve<EventBus>('eventBus')

    await eventBus.setup()

    /**
     * Integrations module
     */
    queryBus.register(IntegrationFactory.getQueryHandlers())
    commandBus.register(IntegrationFactory.getCommandHandlers())
    eventBus.subscribe(IntegrationFactory.getEventSubscribers())
  }
}

new Application().setup()
