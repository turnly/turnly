import { EventsSubscriber, ICommandBus, IEventSubscriber } from '@turnly/shared'
import { TicketCreatedEvent } from 'Tickets/domain/events/TicketCreatedEvent'

import { CreateTicketReadingDBCommand } from '../commands/CreateTicketReadingDBCommand'

@EventsSubscriber(TicketCreatedEvent)
export class CreateTicketReadingDBSubscriber
  implements IEventSubscriber<TicketCreatedEvent>
{
  public constructor(private readonly commandBus: ICommandBus) {}

  public async execute(event: TicketCreatedEvent) {
    const { payload } = event

    if (payload)
      await this.commandBus.execute(new CreateTicketReadingDBCommand(payload))
  }
}
