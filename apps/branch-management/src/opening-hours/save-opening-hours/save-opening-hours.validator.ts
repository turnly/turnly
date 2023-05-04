/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Validator } from '@turnly/core'

const openingHour = Validator.object({
  dayOfWeek: Validator.getBuilder().number().min(1).max(7).required(),
  openAllDay: Validator.getBuilder().boolean().optional(),
  closedAllDay: Validator.getBuilder().boolean().optional(),
  openHour: Validator.getBuilder().number().min(0).max(23).required(),
  openMinutes: Validator.getBuilder().number().min(0).max(59).required(),
  closeHour: Validator.getBuilder().number().min(0).max(23).required(),
  closeMinutes: Validator.getBuilder().number().min(0).max(59).required(),
})
  .without('openAllDay', 'closedAllDay')
  .without('closedAllDay', 'openAllDay')

export const SaveOpeningHoursValidator = Validator.object({
  organizationId: Validator.isId(),
  locationId: Validator.isId(),
  openingHours: Validator.getBuilder()
    .array()
    .items(openingHour)
    .unique((a, b) => a.dayOfWeek === b.dayOfWeek)
    .min(1)
    .required(),
})
