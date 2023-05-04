/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { GetOneTokenController } from './get-one-token.controller'
import { GetOneTokenQueryHandler } from './get-one-token.query-handler'
import { GetOneTokenServer } from './get-one-token.server'

Box.register({
  getOneTokenServer: ioc.asClass(GetOneTokenServer).singleton(),
  getOneTokenController: ioc.asClass(GetOneTokenController).singleton(),
  getOneTokenQueryHandler: ioc.asClass(GetOneTokenQueryHandler).singleton(),
})
