/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'
import { GetActiveTicketsByCustomerQueryHandler } from 'tickets/get-active-tickets-by-customer/get-active-tickets-by-customer.query-handler'
import { GetAnUnexpiredTicketQueryHandler } from 'tickets/get-an-unexpired-ticket/get-an-unexpired-ticket.query-handler'

import { TicketsMapper } from './infrastructure/mongo/tickets.mapper'
import { TicketsReadableRepo } from './infrastructure/mongo/tickets-readable.repo'
import { TicketsWritableRepo } from './infrastructure/mongo/tickets-writable.repo'

Box.register({
  ticketsMapper: ioc.asClass(TicketsMapper).singleton(),
  ticketsReadableRepo: ioc.asClass(TicketsReadableRepo).singleton(),
  ticketsWritableRepo: ioc.asClass(TicketsWritableRepo).singleton(),
  getAnUnexpiredTicketQueryHandler: ioc
    .asClass(GetAnUnexpiredTicketQueryHandler)
    .singleton(),
  getActiveTicketsByCustomerQueryHandler: ioc
    .asClass(GetActiveTicketsByCustomerQueryHandler)
    .singleton(),
})
