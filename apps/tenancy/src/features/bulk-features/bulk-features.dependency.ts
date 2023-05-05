/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { BulkFeaturesCommandHandler } from './bulk-features.command-handler'
import { BulkFeaturesController } from './bulk-features.controller'
import { BulkFeaturesServer } from './bulk-features.server'

Box.register({
  bulkFeaturesServer: ioc.asClass(BulkFeaturesServer).singleton(),
  bulkFeaturesController: ioc.asClass(BulkFeaturesController).singleton(),
  bulkFeaturesCommandHandler: ioc
    .asClass(BulkFeaturesCommandHandler)
    .singleton(),
})
