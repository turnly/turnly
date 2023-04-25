/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { SearchAvailableLocationsForServingController } from '../api/search-available-locations-for-serving.controller'
import { SearchAvailableLocationsForServingServer } from '../api/search-available-locations-for-serving.server'
import { SearchAvailableLocationsForServingQueryHandler } from '../queries/search-available-locations-for-serving.query-handler'

Box.register({
  searchAvailableLocationsForServingServer: ioc
    .asClass(SearchAvailableLocationsForServingServer)
    .singleton(),
  searchAvailableLocationsForServingController: ioc
    .asClass(SearchAvailableLocationsForServingController)
    .singleton(),
  searchAvailableLocationsForServingQueryHandler: ioc
    .asClass(SearchAvailableLocationsForServingQueryHandler)
    .singleton(),
})
