/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { ListFeaturesController } from './list-features.controller'
import { ListFeaturesQueryHandler } from './list-features.query-handler'
import { ListFeaturesServer } from './list-features.server'

Box.register({
  listFeaturesServer: ioc.asClass(ListFeaturesServer).singleton(),
  listFeaturesController: ioc.asClass(ListFeaturesController).singleton(),
  listFeaturesQueryHandler: ioc.asClass(ListFeaturesQueryHandler).singleton(),
})
