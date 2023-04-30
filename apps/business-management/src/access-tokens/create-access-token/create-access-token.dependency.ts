/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { CreateAccessTokenCommandHandler } from './create-access-token.command-handler'
import { CreateAccessTokenController } from './create-access-token.controller'
import { CreateAccessTokenServer } from './create-access-token.server'

Box.register({
  createAccessTokenServer: ioc.asClass(CreateAccessTokenServer).singleton(),
  createAccessTokenController: ioc
    .asClass(CreateAccessTokenController)
    .singleton(),
  createAccessTokenCommandHandler: ioc
    .asClass(CreateAccessTokenCommandHandler)
    .singleton(),
})
