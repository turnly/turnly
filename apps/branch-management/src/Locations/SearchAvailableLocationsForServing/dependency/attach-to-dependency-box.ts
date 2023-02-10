/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/shared'

import { SearchAvailableLocationsForServingController } from '../api/SearchAvailableLocationsForServingController'
import { SearchAvailableLocationsForServingServer } from '../api/SearchAvailableLocationsForServingServer'
import { SearchAvailableLocationsForServingQueryHandler } from '../queries/SearchAvailableLocationsForServingQueryHandler'

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
