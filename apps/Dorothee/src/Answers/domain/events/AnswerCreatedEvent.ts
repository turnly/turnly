import { DomainEvent, EntityAttributes } from '@turnly/shared'

import { Answer } from '../entities/Answer'

type Payload = EntityAttributes<Answer>

export class AnswerCreatedEvent extends DomainEvent<Payload> {
  public constructor(payload: Payload) {
    super(payload)
  }
}
