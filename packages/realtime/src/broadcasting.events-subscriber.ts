/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Event, EventsSubscriber, IEventSubscriber } from '@turnly/core'
import { Logger } from '@turnly/observability'

import { Channel } from './channel'
import { Realtime } from './realtime'

export type Broadcastable<E extends string> = Record<string, Array<E>>

/**
 * Broadcasting Events
 *
 * @description The broadcasting events allow the server to broadcast events to the clients.
 */
@EventsSubscriber()
export class BroadcastingEventsSubscriber<E extends string>
  implements IEventSubscriber
{
  public constructor(
    private readonly broadcastable: Broadcastable<E>,
    private readonly realtime: Realtime
  ) {}

  public async execute(event: Event) {
    Logger.debug(`Broadcasting event: ${event.getName()}`)

    for (const channel of this.broadcastOn(event)) {
      channel.onBroadcast(event.getName(), event)
    }
  }

  /**
   * Broadcast On
   *
   * @description Get the channels the event should broadcast on.
   */
  private broadcastOn(event: Event) {
    const channels = Array.from(this.realtime.getChannels())

    return channels.filter(channel => {
      const events = this.getChannelEvents(channel)

      return events.includes(event.getName() as E)
    })
  }

  /**
   * Channel events
   *
   * @description Get the channel events.
   */
  private getChannelEvents(channel: Channel): E[] {
    const name = channel.getName().replace(/^\//, '').trim()

    return this.broadcastable[name] || []
  }
}
