/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { EntityAttributes, Event, EventType } from '@turnly/core'
import { Service } from 'services/shared/domain/entities/service.entity'

type Payload = EntityAttributes<Service>

export class ServiceCreatedEvent extends Event<Payload> {
  public constructor(payload: Payload) {
    super(EventType.CREATE, payload)
  }
}