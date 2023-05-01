/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { PairToLocationCommandHandler } from './pair-to-location.command-handler'
import { PairToLocationController } from './pair-to-location.controller'

Box.register({
  pairToLocationController: ioc.asClass(PairToLocationController).singleton(),
  pairToLocationCommandHandler: ioc
    .asClass(PairToLocationCommandHandler)
    .singleton(),
})
