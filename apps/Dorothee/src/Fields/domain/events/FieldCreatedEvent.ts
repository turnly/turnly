import { DomainEvent, EntityAttributes } from '@turnly/core'

import { Field } from '../entities/Field'

type Payload = EntityAttributes<Field>

export class FieldCreatedEvent extends DomainEvent<Payload> {
  public constructor(payload: Payload) {
    super(payload)
  }
}
