/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'
import { EntityAttributes } from '@turnly/core'
import { Producers } from '@turnly/grpc'
import { SignageDisplay } from 'signage-displays/shared/domain/entities/signage-display.entity'

export class SignageDisplaysMapper {
  public static toRPC(
    entity: Nullable<EntityAttributes<SignageDisplay>> | undefined
  ): Producers.Channels.SignageDisplay {
    const signageDisplay = new Producers.Channels.SignageDisplay()

    if (entity) {
      signageDisplay.setId(entity.id)
      signageDisplay.setName(entity.name)
      signageDisplay.setDeviceId(entity.deviceId as string)
      signageDisplay.setOrganizationId(entity.organizationId)

      if (entity.locationId) signageDisplay.setLocationId(entity.locationId)

      if (entity.refreshTime)
        signageDisplay.setRefreshTimeValue(entity.refreshTime)

      if (entity.refreshTimeUnit)
        signageDisplay.setRefreshTimeUnit(entity.refreshTimeUnit)

      if (entity.clearTicketsAfter)
        signageDisplay.setClearTicketsAfter(entity.clearTicketsAfter)

      if (entity.serviceIds) signageDisplay.setServiceIdsList(entity.serviceIds)

      if (entity.order) signageDisplay.setOrder(entity.order)
    }

    return signageDisplay
  }
}
