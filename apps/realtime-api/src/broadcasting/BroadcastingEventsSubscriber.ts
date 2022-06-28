import { Logger } from '@turnly/common'
import { Channel, Realtime } from '@turnly/realtime'
import { Event, EventsSubscriber, IEventSubscriber } from '@turnly/shared'

import broadcastable from './broadcastable-events.json'

/**
 * Broadcasting Events
 *
 * @description The broadcasting events allow the server to broadcast events to the clients.
 */
@EventsSubscriber()
export class BroadcastingEventsSubscriber implements IEventSubscriber {
  public constructor(private readonly realtime: Realtime) {}

  public async execute(event: Event) {
    Logger.verbose(`Broadcasting event: ${event.getName()}`)

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
      const events: string[] = broadcastable[this.getChannelName(channel)] || []

      return events.includes(event.getName())
    })
  }

  /**
   * Channel name
   *
   * @description Get the name of the channel.
   */
  private getChannelName(channel: Channel) {
    return channel.getName().replace(/^\//, '').trim()
  }
}
