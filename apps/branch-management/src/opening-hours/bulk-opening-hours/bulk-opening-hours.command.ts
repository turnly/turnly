/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { EntityAttributes, OrganizationCommand } from '@turnly/core'
import { OpeningHour } from 'opening-hours/shared/domain/entities/opening-hour.entity'

export type OpeningHourAttributes = Omit<
  EntityAttributes<OpeningHour>,
  'id' | 'organizationId' | 'locationId'
>

export class BulkOpeningHoursCommand extends OrganizationCommand {
  public readonly locationId: string
  public readonly openingHours: OpeningHourAttributes[]
}
