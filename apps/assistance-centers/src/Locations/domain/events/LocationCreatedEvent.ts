/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { EntityAttributes, Event, EventType } from '@turnly/shared'

import { Location } from '../entities/Location'

type Payload = EntityAttributes<Location>

export class LocationCreatedEvent extends Event<Payload> {
  public constructor(payload: Payload) {
    super(EventType.CREATE, payload)
  }
}
