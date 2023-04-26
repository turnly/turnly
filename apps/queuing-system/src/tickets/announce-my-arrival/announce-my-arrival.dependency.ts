/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { AnnounceMyArrivalCommandHandler } from './announce-my-arrival.command-handler'
import { AnnounceMyArrivalController } from './announce-my-arrival.controller'
import { AnnounceMyArrivalServer } from './announce-my-arrival.server'

Box.register({
  announceMyArrivalServer: ioc.asClass(AnnounceMyArrivalServer).singleton(),
  announceMyArrivalController: ioc
    .asClass(AnnounceMyArrivalController)
    .singleton(),
  announceMyArrivalCommandHandler: ioc
    .asClass(AnnounceMyArrivalCommandHandler)
    .singleton(),
})
