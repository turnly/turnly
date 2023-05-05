/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { GeneratePairingCodeCommandHandler } from './generate-pairing-code.command-handler'
import { GeneratePairingCodeController } from './generate-pairing-code.controller'
import { GeneratePairingCodeServer } from './generate-pairing-code.server'

Box.register({
  generatePairingCodeController: ioc
    .asClass(GeneratePairingCodeController)
    .singleton(),
  generatePairingCodeCommandHandler: ioc
    .asClass(GeneratePairingCodeCommandHandler)
    .singleton(),
  generatePairingCodeServer: ioc.asClass(GeneratePairingCodeServer).singleton(),
})
