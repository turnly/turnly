/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'
import { EntityAttributes } from '@turnly/core'
import { Producers } from '@turnly/grpc'
import { OpeningHour } from 'opening-hours/shared/domain/entities/opening-hour.entity'

export class OpeningHoursMapper {
  public static toRPC(
    entity: Nullable<EntityAttributes<OpeningHour>> | undefined
  ): Producers.BranchManagement.OpeningHour {
    const openingHour = new Producers.BranchManagement.OpeningHour()

    if (entity) {
      openingHour.setId(entity.id)
      openingHour.setLocationId(entity.locationId)
      openingHour.setName(entity.name)
      openingHour.setDayOfWeek(entity.dayOfWeek)
      openingHour.setOpenAllDay(entity.openAllDay)
      openingHour.setClosedAllDay(entity.closedAllDay)
      openingHour.setOpenHour(entity.openHour)
      openingHour.setOpenMinutes(entity.openMinutes)
      openingHour.setCloseHour(entity.closeHour)
      openingHour.setCloseMinutes(entity.closeMinutes)
    }

    return openingHour
  }
}
