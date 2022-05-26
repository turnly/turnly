import { DomainEvent, EntityAttributes } from '@turnly/core'
import { Guid } from '@turnly/shared'

import { Ticket } from '../entities/Ticket'

type Payload = {
  ticket: EntityAttributes<Ticket>
  answers?: {
    fieldId: Guid
    value: string
  }[]
}

export class AnswerToCreateFromTicketEvent extends DomainEvent<Payload> {
  public constructor(payload: Payload) {
    super(payload)
  }
}
