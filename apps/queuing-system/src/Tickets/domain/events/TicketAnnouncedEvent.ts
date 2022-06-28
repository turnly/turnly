import { EntityAttributes, Event, EventType } from '@turnly/shared'

import { Ticket } from '../entities/Ticket'

type Payload = EntityAttributes<Ticket>

export class TicketAnnouncedEvent extends Event<Payload> {
  public constructor(payload: Payload) {
    super(EventType.UPDATE, payload)
  }
}
