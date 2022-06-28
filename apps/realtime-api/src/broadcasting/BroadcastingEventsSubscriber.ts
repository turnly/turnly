import { Logger } from '@turnly/common'
import { Realtime } from '@turnly/realtime'
import { Event, EventsSubscriber, IEventSubscriber } from '@turnly/shared'

import { events } from './events.json'

@EventsSubscriber()
export class BroadcastingEventsSubscriber implements IEventSubscriber {
  public constructor(private readonly realtime: Realtime) {}

  public async execute(event: Event) {
    if (events.includes(event.getName())) {
      Logger.debug(`Broadcasting event: ${event.getName()}`)

      const channels = this.realtime.getChannels().values()

      for (const channel of channels) {
        channel.onBroadcast(event.getName(), event.payload)
      }
    }
  }
}
