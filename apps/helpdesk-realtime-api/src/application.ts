/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { eventBus } from '@turnly/core'
import { BroadcastingEventsSubscriber, Realtime } from '@turnly/realtime'

import { BroadcastableEvents } from './constants/broadcastable-events.enum'
import { BROADCASTABLE_TO_CHANNELS } from './constants/broadcastable-to-channels.const'

export class Application {
  /**
   * Sets up application.
   *
   * @memberof Startup
   */
  public async setup(): Promise<void> {
    const { server } = await import('./server')

    this.setupBroadcastingEvents(server)
  }

  /**
   * Sets up broadcasting events.
   *
   * @description Register broadcasting subscriber to event bus.
   */
  private setupBroadcastingEvents(realtime: Realtime) {
    const subscriber = new BroadcastingEventsSubscriber<BroadcastableEvents>(
      BROADCASTABLE_TO_CHANNELS,
      realtime
    )

    eventBus.subscribe([subscriber])
  }
}
