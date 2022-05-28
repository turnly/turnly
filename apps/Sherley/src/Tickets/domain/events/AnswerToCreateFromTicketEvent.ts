import { Guid } from '@turnly/common'
import { DomainEvent, EntityAttributes } from '@turnly/shared'

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
