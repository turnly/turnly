import { DomainEvent, EntityAttributes } from '@turnly/shared'

import { Ticket } from '../entities/Ticket'

type Payload = EntityAttributes<Ticket>

export class TicketCreatedEvent extends DomainEvent<Payload> {
  public constructor(payload: Payload) {
    super(payload)
  }
}
