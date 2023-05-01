/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { EntityAttributes, Event, EventType } from '@turnly/core'
import { Device } from 'devices/shared/domain/entities/device.entity'

type Payload = EntityAttributes<Device> & {
  accessToken: string
}

export class DevicePairedEvent extends Event<Payload> {
  public constructor(payload: Payload) {
    super(EventType.UPDATE, payload)
  }
}
