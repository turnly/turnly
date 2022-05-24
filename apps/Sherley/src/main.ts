import {
  EventBus,
  InMemoryCommandBus,
  InMemoryQueryBus,
  MongoClientFactory,
  mongoConfig,
  Startup,
} from '@turnly/core'
import { Box } from 'Shared/infrastructure/dependencies'
import { TicketFactory } from 'Tickets/infrastructure/factories/TicketFactory'

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

    this.setupMonitoring(rest.app)
    await this.setupBuses()

    rest.setup()
  }

  public async setupBuses() {
    const queryBus = Box.resolve<InMemoryQueryBus>('queryBus')
    const commandBus = Box.resolve<InMemoryCommandBus>('commandBus')
    const eventBus = Box.resolve<EventBus>('eventBus')

    await eventBus.setup()

    /**
     * Tickets module
     */
    queryBus.register(TicketFactory.getQueryHandlers())
    commandBus.register(TicketFactory.getCommandHandlers())
    eventBus.subscribe(TicketFactory.getEventSubscribers())
  }
}

new Application().setup()
