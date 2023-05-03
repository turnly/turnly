/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Validator } from '@turnly/core'

const openingHour = Validator.object({
  name: Validator.string(),
  dayOfWeek: Validator.int(),
  openAllDay: Validator.getBuilder().boolean().optional(),
  closedAllDay: Validator.getBuilder().boolean().optional(),
  openHour: Validator.int(),
  openMinutes: Validator.int(),
  closeHour: Validator.int(),
  closeMinutes: Validator.int(),
})

export const BulkOpeningHoursValidator = Validator.object({
  organizationId: Validator.isId(),
  locationId: Validator.isId(),
  openingHours: Validator.getBuilder()
    .array()
    .items(openingHour)
    .min(1)
    .required(),
})
