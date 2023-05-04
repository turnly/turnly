/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { GetOneMemberController } from './get-one-member.controller'
import { GetOneMemberServer } from './get-one-member.server'

Box.register({
  getOneMemberServer: ioc.asClass(GetOneMemberServer).singleton(),
  getOneMemberController: ioc.asClass(GetOneMemberController).singleton(),
})
