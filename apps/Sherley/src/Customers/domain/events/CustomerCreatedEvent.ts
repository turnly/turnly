import { DomainEvent, EntityAttributes } from '@turnly/shared'

import { Customer } from '../entities/Customer'

type Payload = EntityAttributes<Customer>

export class CustomerCreatedEvent extends DomainEvent<Payload> {
  public constructor(payload: Payload) {
    super(payload)
  }
}
