/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/core'
import { GetOneMemberQueryHandler } from 'members/get-one-member'

import { MembersMapper } from './infrastructure/mongo/members.mapper'
import { MembersReadableRepo } from './infrastructure/mongo/members-readable.repo'
import { MembersWritableRepo } from './infrastructure/mongo/members-writable.repo'

Box.register({
  membersMapper: ioc.asClass(MembersMapper).singleton(),
  membersReadableRepo: ioc.asClass(MembersReadableRepo).singleton(),
  membersWritableRepo: ioc.asClass(MembersWritableRepo).singleton(),
  getOneMemberQueryHandler: ioc.asClass(GetOneMemberQueryHandler).singleton(),
})
