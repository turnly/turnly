/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { PairToLocationCommandHandler } from './pair-to-location.command-handler'
import { PairToLocationController } from './pair-to-location.controller'
import { PairToLocationServer } from './pair-to-location.server'

Box.register({
  pairToLocationServer: ioc.asClass(PairToLocationServer).singleton(),
  pairToLocationController: ioc.asClass(PairToLocationController).singleton(),
  pairToLocationCommandHandler: ioc
    .asClass(PairToLocationCommandHandler)
    .singleton(),
})
