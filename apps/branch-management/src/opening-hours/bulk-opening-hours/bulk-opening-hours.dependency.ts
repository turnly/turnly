/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { BulkOpeningHoursCommandHandler } from './bulk-opening-hours.command-handler'
import { BulkOpeningHoursController } from './bulk-opening-hours.controller'
import { BulkOpeningHoursServer } from './bulk-opening-hours.server'

Box.register({
  bulkOpeningHoursServer: ioc.asClass(BulkOpeningHoursServer).singleton(),
  bulkOpeningHoursController: ioc
    .asClass(BulkOpeningHoursController)
    .singleton(),
  bulkOpeningHoursCommandHandler: ioc
    .asClass(BulkOpeningHoursCommandHandler)
    .singleton(),
})
