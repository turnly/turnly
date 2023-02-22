/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/shared'

import {
  ActiveTicketsByCustomerQueryHandler,
  GetAnUnexpiredTicketQueryHandler,
} from '../application/queries'
import { TicketsMapper } from '../infrastructure/persistence/mongo/entity-model-mappers/TicketsMapper'
import { TicketsReadableRepo } from '../infrastructure/persistence/mongo/repositories/TicketsReadableRepo'
import { TicketsWritableRepo } from '../infrastructure/persistence/mongo/repositories/TicketsWritableRepo'

Box.register({
  ticketsMapper: ioc.asClass(TicketsMapper).singleton(),
  ticketsReadableRepo: ioc.asClass(TicketsReadableRepo).singleton(),
  ticketsWritableRepo: ioc.asClass(TicketsWritableRepo).singleton(),
  getAnUnexpiredTicketQueryHandler: ioc
    .asClass(GetAnUnexpiredTicketQueryHandler)
    .singleton(),
  activeTicketsByCustomerQueryHandler: ioc
    .asClass(ActiveTicketsByCustomerQueryHandler)
    .singleton(),
})
