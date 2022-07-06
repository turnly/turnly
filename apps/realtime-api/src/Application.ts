/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { Realtime } from '@turnly/realtime'
import { eventBus } from '@turnly/shared'
import { BroadcastingEventsSubscriber } from 'broadcasting/BroadcastingEventsSubscriber'
import { helpdeskHandlers } from 'channels/helpdesk/handlers'
import { queuingHandlers } from 'channels/queuing/handlers'
import { AllowConnGuard } from 'channels/queuing/middlewares/AllowConnGuard'
import { streamHandlers } from 'channels/stream/handlers'
import { AuthorizedConnGuard } from 'channels/stream/middlewares/AuthorizedConnGuard'
import { Channels, serverOptions } from 'shared/config'

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

  /**
   * Sets up channels.
   *
   * @description Create channels and register handlers.
   */
  private setupChannels() {
    this.realtime
      .listen(Channels.STREAM)
      .use(new AuthorizedConnGuard().use())
      .subscribe(streamHandlers)

    this.realtime
      .listen(Channels.QUEUING)
      .use(new AllowConnGuard().use())
      .subscribe(queuingHandlers)

    this.realtime.listen(Channels.HELPDESK).subscribe(helpdeskHandlers)
  }

  /**
   * Sets up broadcasting events.
   *
   * @description Register broadcasting subscriber to event bus.
   */
  private setupBroadcastingEvents() {
    const subscriber = new BroadcastingEventsSubscriber(this.realtime)

    eventBus.subscribe([subscriber])
  }
}
