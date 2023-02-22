/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/shared'

import { CreateTicketReadingDBCommandHandler } from '../commands/CreateTicketReadingDBCommandHandler'
import { CreateTicketReadingDBSubscriber } from '../subscribers/CreateTicketReadingDBSubscriber'

Box.register({
  createTicketReadingDBCommandHandler: ioc
    .asClass(CreateTicketReadingDBCommandHandler)
    .singleton(),
  createTicketReadingDBSubscriber: ioc
    .asClass(CreateTicketReadingDBSubscriber)
    .singleton(),
})
