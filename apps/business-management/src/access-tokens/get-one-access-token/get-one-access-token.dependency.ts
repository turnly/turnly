/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { GetOneAccessTokenController } from './get-one-access-token.controller'
import { GetOneAccessTokenQueryHandler } from './get-one-access-token.query-handler'
import { GetOneAccessTokenServer } from './get-one-access-token.server'

Box.register({
  getOneAccessTokenServer: ioc.asClass(GetOneAccessTokenServer).singleton(),
  getOneAccessTokenController: ioc
    .asClass(GetOneAccessTokenController)
    .singleton(),
  getOneAccessTokenQueryHandler: ioc
    .asClass(GetOneAccessTokenQueryHandler)
    .singleton(),
})
