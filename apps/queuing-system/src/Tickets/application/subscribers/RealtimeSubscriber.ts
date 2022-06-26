import {
  EventsSubscriber,
  IEventSubscriber,
  RealtimeClient,
} from '@turnly/shared'
import { TicketAnnouncedEvent } from 'Tickets/domain/events/TicketAnnouncedEvent'
import { TicketCancelledEvent } from 'Tickets/domain/events/TicketCancelledEvent'
import { TicketCompletedEvent } from 'Tickets/domain/events/TicketCompletedEvent'
import { TicketCreatedEvent } from 'Tickets/domain/events/TicketCreatedEvent'

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
export class RealtimeSubscriber implements IEventSubscriber<Event> {
  public constructor(private readonly realtime: RealtimeClient) {}

  public async execute(event: Event) {
    this.realtime.notify(event.getName(), event)
  }
}
