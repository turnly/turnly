/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { EntityAttributes, Event, EventType } from '@turnly/core'
import { OpeningHour } from 'opening-hours/shared/domain/entities/opening-hour.entity'

type Payload = {
  hours: EntityAttributes<OpeningHour>[]
  locationId: string
  organizationId: string
}

export class OpeningHoursUpdatedEvent extends Event<Payload> {
  public constructor(payload: Payload) {
    super(EventType.CREATE, payload)
  }
}
