/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { SearchTicketsToDisplayOnDigitalSignageController } from './search-tickets-to-display-on-digital-signage.controller'
import { SearchTicketsToDisplayOnDigitalSignageQueryHandler } from './search-tickets-to-display-on-digital-signage.query-handler'
import { SearchTicketsToDisplayOnDigitalSignageServer } from './search-tickets-to-display-on-digital-signage.server'

Box.register({
  searchTicketsToDisplayOnDigitalSignageServer: ioc
    .asClass(SearchTicketsToDisplayOnDigitalSignageServer)
    .singleton(),
  searchTicketsToDisplayOnDigitalSignageController: ioc
    .asClass(SearchTicketsToDisplayOnDigitalSignageController)
    .singleton(),
  searchTicketsToDisplayOnDigitalSignageQueryHandler: ioc
    .asClass(SearchTicketsToDisplayOnDigitalSignageQueryHandler)
    .singleton(),
})
