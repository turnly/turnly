import { EntityAttributes, Event } from '@turnly/shared'

import { Answer } from '../entities/Answer'

type Payload = EntityAttributes<Answer>

export class AnswerCreatedEvent extends Event<Payload> {
  public constructor(payload: Payload) {
    super(payload)
  }
}
