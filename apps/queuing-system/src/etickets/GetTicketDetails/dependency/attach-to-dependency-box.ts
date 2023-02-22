/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/shared'

import { GetTicketDetailsController } from '../api/GetTicketDetailsController'
import { GetTicketDetailsServer } from '../api/GetTicketDetailsServer'

Box.register({
  getTicketDetailsServer: ioc.asClass(GetTicketDetailsServer).singleton(),
  getTicketDetailsController: ioc
    .asClass(GetTicketDetailsController)
    .singleton(),
})
