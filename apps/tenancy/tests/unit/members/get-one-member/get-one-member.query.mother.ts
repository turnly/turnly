/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import { GetOneMemberQuery } from '../../../../src/members/get-one-member'

export class GetOneMemberQueryMother {
  static create(
    id: Guid = ObjectMother.uuid('member'),
    organizationId: Guid = ObjectMother.uuid('org')
  ): GetOneMemberQuery {
    return GetOneMemberQuery.build({ id, organizationId })
  }

  static random(): GetOneMemberQuery {
    return this.create()
  }
}
