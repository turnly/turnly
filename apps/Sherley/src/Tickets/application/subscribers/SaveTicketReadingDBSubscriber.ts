import { EventsSubscriber, ICommandBus, IEventSubscriber } from '@turnly/core'
import { TicketCreatedEvent } from 'Tickets/domain/events/TicketCreatedEvent'
import { TicketUpdatedEvent } from 'Tickets/domain/events/TicketUpdatedEvent'

import { SaveTicketReadingDBCommand } from '../commands/SaveTicketReadingDBCommand'

type Event = TicketCreatedEvent | TicketUpdatedEvent

@EventsSubscriber(TicketCreatedEvent, TicketUpdatedEvent)
export class SaveTicketReadingDBSubscriber implements IEventSubscriber<Event> {
  public constructor(private readonly commandBus: ICommandBus) {}

  public async execute(event: Event) {
    const { payload } = event

    if (payload)
      await this.commandBus.execute(new SaveTicketReadingDBCommand(payload))
  }
}
