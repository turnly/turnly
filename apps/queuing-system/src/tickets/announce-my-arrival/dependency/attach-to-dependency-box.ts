/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/shared'

import { AnnounceMyArrivalController } from '../api/announce-my-arrival.controller'
import { AnnounceMyArrivalServer } from '../api/announce-my-arrival.server'
import { AnnounceMyArrivalCommandHandler } from '../commands/announce-my-arrival.command-handler'

Box.register({
  announceMyArrivalServer: ioc.asClass(AnnounceMyArrivalServer).singleton(),
  announceMyArrivalController: ioc
    .asClass(AnnounceMyArrivalController)
    .singleton(),
  announceMyArrivalCommandHandler: ioc
    .asClass(AnnounceMyArrivalCommandHandler)
    .singleton(),
})
