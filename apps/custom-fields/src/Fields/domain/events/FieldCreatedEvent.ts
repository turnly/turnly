import { EntityAttributes, Event, EventType } from '@turnly/shared'

import { Field } from '../entities/Field'

type Payload = EntityAttributes<Field>

export class FieldCreatedEvent extends Event<Payload> {
  public constructor(payload: Payload) {
    super(EventType.CREATE, payload)
  }
}
