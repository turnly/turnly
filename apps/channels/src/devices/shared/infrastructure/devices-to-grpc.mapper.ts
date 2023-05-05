/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'
import { EntityAttributes } from '@turnly/core'
import { Producers } from '@turnly/grpc'

import { Device } from '../domain/entities/device.entity'

export class DevicesMapper {
  public static toRPC(
    entity: Nullable<EntityAttributes<Device>> | undefined
  ): Producers.Channels.Device {
    const device = new Producers.Channels.Device()

    if (entity) {
      device
        .setId(entity.id)
        .setName(entity.name)
        .setType(entity.type)
        .setStatus(entity.status)

      if (entity.locationId) device.setLocationId(entity.locationId)

      device.setMetadataList(
        entity.metadata.map(({ key, value }) =>
          new Producers.Channels.Extra().setKey(key).setValue(value)
        )
      )
    }

    return device
  }
}
