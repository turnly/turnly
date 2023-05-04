/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { CreateTokenCommandHandler } from './create-token.command-handler'
import { CreateTokenController } from './create-token.controller'
import { CreateTokenServer } from './create-token.server'

Box.register({
  createTokenServer: ioc.asClass(CreateTokenServer).singleton(),
  createTokenController: ioc.asClass(CreateTokenController).singleton(),
  createTokenCommandHandler: ioc.asClass(CreateTokenCommandHandler).singleton(),
})
