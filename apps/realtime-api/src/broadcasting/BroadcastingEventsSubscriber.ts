import { Logger } from '@turnly/common'
import { Event, EventsSubscriber, IEventSubscriber } from '@turnly/shared'

@EventsSubscriber()
export class BroadcastingEventsSubscriber implements IEventSubscriber {
  public async execute(event: Event) {
    const { payload } = event

    Logger.debug(`Broadcasting event: ${event.getName()}`, payload)
  }
}
