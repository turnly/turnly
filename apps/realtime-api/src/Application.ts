import { Realtime } from '@turnly/realtime'
import { eventBus } from '@turnly/shared'
import { helpdeskHandlers } from 'channels/helpdesk/handlers'
import { queuingHandlers } from 'channels/queuing/handlers'
import { AllowConnGuard } from 'channels/queuing/middlewares/AllowConnGuard'
import { streamHandlers } from 'channels/stream/handlers'
import { AuthorizedConnGuard } from 'channels/stream/middlewares/AuthorizedConnGuard'
import { Channels, serverOptions } from 'shared/config'
import { BroadcastingEventsSubscriber } from 'subscribers/BroadcastingEventsSubscriber'

export class Application {
  private readonly realtime: Realtime

  public constructor() {
    this.realtime = new Realtime(serverOptions)
  }

  /**
   * Sets up application.
   *
   * @memberof Startup
   */
  public async setup(): Promise<void> {
    this.setupChannels()
    this.setupBroadcastingEvents()
  }

  private setupChannels() {
    /**
     * Create a channel to listen to events
     */
    const stream = this.realtime.listen(Channels.STREAM)
    const queuing = this.realtime.listen(Channels.QUEUING)
    const helpdesk = this.realtime.listen(Channels.HELPDESK)

    /**
     * Sets up the middleware
     */
    stream.use(new AuthorizedConnGuard().use())
    queuing.use(new AllowConnGuard().use())

    stream.subscribe(streamHandlers)
    queuing.subscribe(queuingHandlers)
    helpdesk.subscribe(helpdeskHandlers)
  }

  private setupBroadcastingEvents() {
    eventBus.subscribe([new BroadcastingEventsSubscriber()])
  }
}
