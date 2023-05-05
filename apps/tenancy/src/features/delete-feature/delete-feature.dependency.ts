/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { DeleteFeatureCommandHandler } from './delete-feature.command-handler'
import { DeleteFeatureController } from './delete-feature.controller'
import { DeleteFeatureServer } from './delete-feature.server'

Box.register({
  deleteFeaturesServer: ioc.asClass(DeleteFeatureServer).singleton(),
  deleteFeaturesController: ioc.asClass(DeleteFeatureController).singleton(),
  deleteFeaturesCommandHandler: ioc
    .asClass(DeleteFeatureCommandHandler)
    .singleton(),
})
