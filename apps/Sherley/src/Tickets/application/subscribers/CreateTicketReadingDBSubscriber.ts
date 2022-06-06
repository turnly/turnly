import { EventsSubscriber, ICommandBus, IEventSubscriber } from '@turnly/shared'
import { TicketAnnouncedEvent } from 'Tickets/domain/events/TicketAnnouncedEvent'
import { TicketCancelledEvent } from 'Tickets/domain/events/TicketCancelledEvent'
import { TicketCreatedEvent } from 'Tickets/domain/events/TicketCreatedEvent'

import { CreateTicketReadingDBCommand } from '../commands/CreateTicketReadingDBCommand'

type Event = TicketAnnouncedEvent | TicketCancelledEvent | TicketCreatedEvent

@EventsSubscriber(
  TicketCreatedEvent,
  TicketCancelledEvent,
  TicketAnnouncedEvent
)
export class CreateTicketReadingDBSubscriber
  implements IEventSubscriber<Event>
{
  public constructor(private readonly commandBus: ICommandBus) {}

  public async execute(event: Event) {
    const { payload } = event

    if (payload)
      await this.commandBus.execute(new CreateTicketReadingDBCommand(payload))
  }
}
