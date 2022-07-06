/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { EventsSubscriber, ICommandBus, IEventSubscriber } from '@turnly/shared'
import { TicketAnnouncedEvent } from 'Tickets/domain/events/TicketAnnouncedEvent'
import { TicketCancelledEvent } from 'Tickets/domain/events/TicketCancelledEvent'
import { TicketCompletedEvent } from 'Tickets/domain/events/TicketCompletedEvent'
import { TicketCreatedEvent } from 'Tickets/domain/events/TicketCreatedEvent'

import { CreateTicketReadingDBCommand } from '../commands/CreateTicketReadingDBCommand'

type Event =
  | TicketAnnouncedEvent
  | TicketCancelledEvent
  | TicketCreatedEvent
  | TicketCompletedEvent

@EventsSubscriber(
  TicketCreatedEvent,
  TicketCancelledEvent,
  TicketAnnouncedEvent,
  TicketCompletedEvent
)
export class CreateTicketReadingDBSubscriber
  implements IEventSubscriber<Event>
{
  public constructor(private readonly commandBus: ICommandBus) {}

  public async execute(event: Event) {
    const { payload } = event

    await this.commandBus.execute(new CreateTicketReadingDBCommand(payload))
  }
}
