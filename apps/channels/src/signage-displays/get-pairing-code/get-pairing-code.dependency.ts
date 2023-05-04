/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { GetPairingCodeCommandHandler } from './get-pairing-code.command-handler'
import { GetPairingCodeController } from './get-pairing-code.controller'
import { GetPairingCodeServer } from './get-pairing-code.server'

Box.register({
  getPairingCodeController: ioc.asClass(GetPairingCodeController).singleton(),
  getPairingCodeCommandHandler: ioc
    .asClass(GetPairingCodeCommandHandler)
    .singleton(),
  getPairingCodeServer: ioc.asClass(GetPairingCodeServer).singleton(),
})
