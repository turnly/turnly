/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { EventsSubscriber, ICommandBus, IEventSubscriber } from '@turnly/shared'
import { TicketAnnouncedEvent } from 'tickets/create-ticket/events/TicketAnnouncedEvent'
import { TicketCancelledEvent } from 'tickets/create-ticket/events/TicketCancelledEvent'
import { TicketCompletedEvent } from 'tickets/create-ticket/events/TicketCompletedEvent'
import { TicketCreatedEvent } from 'tickets/create-ticket/events/TicketCreatedEvent'
import { CreateTicketReadingDBCommand } from 'tickets/create-ticket-reading-database'

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
