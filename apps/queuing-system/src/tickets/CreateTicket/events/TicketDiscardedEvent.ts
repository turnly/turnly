/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { EntityAttributes, Event, EventType } from '@turnly/shared'
import { Ticket } from 'tickets/shared/domain/entities/Ticket'

type Payload = EntityAttributes<Ticket>

export class TicketDiscardedEvent extends Event<Payload> {
  public constructor(payload: Payload) {
    super(EventType.UPDATE, payload)
  }
}