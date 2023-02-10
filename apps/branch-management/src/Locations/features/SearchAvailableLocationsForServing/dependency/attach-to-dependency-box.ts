/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/shared'

import { SearchAvailableLocationsForServingController } from '../api/SearchAvailableLocationsForServingController'
import { SearchAvailableLocationsForServingQueryHandler } from '../application/SearchAvailableLocationsForServingQueryHandler'

/**
 * Controllers
 */
Box.register({
  searchAvailableLocationsForServingController: ioc
    .asClass(SearchAvailableLocationsForServingController)
    .singleton(),
})

/**
 * Query handlers
 */
Box.register({
  searchAvailableLocationsForServingQueryHandler: ioc
    .asClass(SearchAvailableLocationsForServingQueryHandler)
    .singleton(),
})

export const SearchAvailableLocationsForServingQueryHandlerInstance =
  Box.resolve<SearchAvailableLocationsForServingQueryHandler>(
    'searchAvailableLocationsForServingQueryHandler'
  )

export const SearchAvailableLocationsForServingControllerInstance =
  Box.resolve<SearchAvailableLocationsForServingController>(
    'searchAvailableLocationsForServingController'
  )
