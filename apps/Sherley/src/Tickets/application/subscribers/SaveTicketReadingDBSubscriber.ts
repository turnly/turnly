import { EventsSubscriber, ICommandBus, IEventSubscriber } from '@turnly/shared'
import { TicketCreatedEvent } from 'Tickets/domain/events/TicketCreatedEvent'

import { SaveTicketReadingDBCommand } from '../commands/SaveTicketReadingDBCommand'

@EventsSubscriber(TicketCreatedEvent)
export class SaveTicketReadingDBSubscriber
  implements IEventSubscriber<TicketCreatedEvent>
{
  public constructor(private readonly commandBus: ICommandBus) {}

  public async execute(event: TicketCreatedEvent) {
    const { payload } = event

    if (payload)
      await this.commandBus.execute(new SaveTicketReadingDBCommand(payload))
  }
}
