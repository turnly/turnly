/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { SaveOpeningHoursCommandHandler } from './save-opening-hours.command-handler'
import { SaveOpeningHoursController } from './save-opening-hours.controller'
import { SaveOpeningHoursServer } from './save-opening-hours.server'

Box.register({
  saveOpeningHoursServer: ioc.asClass(SaveOpeningHoursServer).singleton(),
  saveOpeningHoursController: ioc
    .asClass(SaveOpeningHoursController)
    .singleton(),
  saveOpeningHoursCommandHandler: ioc
    .asClass(SaveOpeningHoursCommandHandler)
    .singleton(),
})
