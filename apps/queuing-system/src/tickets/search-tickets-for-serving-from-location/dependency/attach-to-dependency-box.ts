/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { SearchTicketsForServingFromLocationController } from '../api/search-tickets-for-serving-from-location.controller'
import { SearchTicketsForServingFromLocationServer } from '../api/search-tickets-for-serving-from-location.server'
import { SearchTicketsForServingFromLocationQueryHandler } from '../queries/search-tickets-for-serving-from-location.query-handler'

Box.register({
  searchTicketsForServingFromLocationServer: ioc
    .asClass(SearchTicketsForServingFromLocationServer)
    .singleton(),
  searchTicketsForServingFromLocationController: ioc
    .asClass(SearchTicketsForServingFromLocationController)
    .singleton(),
  searchTicketsForServingFromLocationQueryHandler: ioc
    .asClass(SearchTicketsForServingFromLocationQueryHandler)
    .singleton(),
})
