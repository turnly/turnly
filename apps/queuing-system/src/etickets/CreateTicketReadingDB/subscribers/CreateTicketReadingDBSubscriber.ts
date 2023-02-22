/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { EventsSubscriber, ICommandBus, IEventSubscriber } from '@turnly/shared'
import { TicketAnnouncedEvent } from 'etickets/CreateTicket/events/TicketAnnouncedEvent'
import { TicketCancelledEvent } from 'etickets/CreateTicket/events/TicketCancelledEvent'
import { TicketCompletedEvent } from 'etickets/CreateTicket/events/TicketCompletedEvent'
import { TicketCreatedEvent } from 'etickets/CreateTicket/events/TicketCreatedEvent'
import { CreateTicketReadingDBCommand } from 'etickets/CreateTicketReadingDB'

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
