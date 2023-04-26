/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { SearchAvailableLocationsForServingController } from './search-available-locations-for-serving.controller'
import { SearchAvailableLocationsForServingQueryHandler } from './search-available-locations-for-serving.query-handler'
import { SearchAvailableLocationsForServingServer } from './search-available-locations-for-serving.server'

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
