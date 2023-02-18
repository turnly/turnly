/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { EntityAttributes, Event, EventType } from '@turnly/shared'
import { Customer } from 'ecustomers/eshared/domain/entities/Customer'

type Payload = EntityAttributes<Customer>

export class CustomerCreatedEvent extends Event<Payload> {
  public constructor(payload: Payload) {
    super(EventType.CREATE, payload)
  }
}
