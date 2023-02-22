/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/shared'

import { ReturnToQueueController } from '../api/ReturnToQueueController'
import { ReturnToQueueServer } from '../api/ReturnToQueueServer'
import { ReturnToQueueCommandHandler } from '../commands/ReturnToQueueCommandHandler'

Box.register({
  returnToQueueServer: ioc.asClass(ReturnToQueueServer).singleton(),
  returnToQueueController: ioc.asClass(ReturnToQueueController).singleton(),
  returnToQueueCommandHandler: ioc
    .asClass(ReturnToQueueCommandHandler)
    .singleton(),
})
