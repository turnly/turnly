/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { EntityAttributes, Event, EventType } from '@turnly/shared'

import { Agent } from '../entities/Agent'

type Payload = EntityAttributes<Agent>

export class AgentCreatedEvent extends Event<Payload> {
  public constructor(payload: Payload) {
    super(EventType.CREATE, payload)
  }
}
