import { EntityAttributes, Event } from '@turnly/shared'

import { Customer } from '../entities/Customer'

type Payload = EntityAttributes<Customer>

export class CustomerCreatedEvent extends Event<Payload> {
  public constructor(payload: Payload) {
    super(payload)
  }
}
