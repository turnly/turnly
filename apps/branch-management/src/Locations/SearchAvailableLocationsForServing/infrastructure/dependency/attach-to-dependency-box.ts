/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/shared'

import { SearchAvailableLocationsForServingQueryHandler } from '../../application/SearchAvailableLocationsForServingQueryHandler'
import { SearchAvailableLocationsForServingController } from '../api/SearchAvailableLocationsForServingController'

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
