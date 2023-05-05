/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { EntityAttributes, Event, EventType } from '@turnly/core'
import { SignageDisplay } from 'signage-displays/shared/domain/entities/signage-display.entity'

type Payload = EntityAttributes<SignageDisplay>

export class SignageDisplayUpdatedEvent extends Event<Payload> {
  public constructor(payload: Payload) {
    super(EventType.CREATE, payload)
  }
}
