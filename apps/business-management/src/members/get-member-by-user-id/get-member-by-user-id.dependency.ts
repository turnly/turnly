/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'

import { GetMemberByUserIdController } from './get-member-by-user-id.controller'
import { GetMemberByUserIdQueryHandler } from './get-member-by-user-id.query-handler'
import { GetMemberByUserIdServer } from './get-member-by-user-id.server'

Box.register({
  getMemberByUserIdServer: ioc.asClass(GetMemberByUserIdServer).singleton(),
  getMemberByUserIdController: ioc
    .asClass(GetMemberByUserIdController)
    .singleton(),
  getMemberByUserIdQueryHandler: ioc
    .asClass(GetMemberByUserIdQueryHandler)
    .singleton(),
})
