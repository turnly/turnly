/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { GetActiveTicketsByCustomerQueryHandler } from './get-active-tickets-by-customer.query-handler'

Box.register({
  getActiveTicketsByCustomerQueryHandler: ioc
    .asClass(GetActiveTicketsByCustomerQueryHandler)
    .singleton(),
})
