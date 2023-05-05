/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { QueryBuilder } from '@turnly/core'

import { Member } from '../../../../src/members/shared/domain/entity/member.entity'

export class MembersQueryMother {
  static getOneWith(member: Member) {
    const { id, locationId, organizationId } = member.toObject()

    return new QueryBuilder<Member>()
      .equal('id', id)
      .equal('organizationId', organizationId)
      .equal('locationId', locationId)
      .getOne()
  }

  static getManyIn(members: Member[]) {
    const ids = members.map(member => member.toObject().id)

    return new QueryBuilder<Member>().in('id', ids).getMany(0, ids.length)
  }
}
