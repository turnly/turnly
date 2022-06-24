import { DomainEvent, EntityAttributes } from '@turnly/shared'

import { Field } from '../entities/Field'

type Payload = EntityAttributes<Field>

export class FieldCreatedEvent extends DomainEvent<Payload> {
  public constructor(payload: Payload) {
    super(payload)
  }
}
