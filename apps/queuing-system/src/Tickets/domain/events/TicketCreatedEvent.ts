import { EntityAttributes, Event } from '@turnly/shared'

import { Ticket } from '../entities/Ticket'

type Payload = EntityAttributes<Ticket>

export class TicketCreatedEvent extends Event<Payload> {
  public constructor(payload: Payload) {
    super(payload)
  }
}
