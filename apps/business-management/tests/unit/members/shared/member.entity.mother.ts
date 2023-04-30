/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { MemberRoles } from '@turnly/auth'
import { Extra, Guid, Nullable } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import { GetOneMemberQuery } from '../../../../src/members/get-one-member'
import { Member } from '../../../../src/members/shared/domain/entity/member.entity'

export class MemberMother {
  static create(
    name: string = ObjectMother.names(),
    role: MemberRoles = MemberRoles.AGENT,
    userId: Guid = ObjectMother.uuid('member'),
    organizationId: Guid = ObjectMother.uuid('org'),
    locationId: Guid = ObjectMother.uuid('loc'),
    extra: Nullable<Extra[]> = []
  ): Member {
    return Member.create({
      name,
      role,
      userId,
      organizationId,
      locationId,
      extra,
    })
  }

  static random(): Member {
    return MemberMother.create()
  }

  static collection(max = ObjectMother.integer(2)): Member[] {
    return ObjectMother.repeater(MemberMother.random, max)
  }

  static fromExistingMemberOnQuery(
    query: GetOneMemberQuery | { organizationId: Guid; id: Guid }
  ): Member {
    return Member.build({
      ...this.random().toObject(),
      organizationId: query.organizationId,
      id: query.id,
    })
  }

  static withExtra(
    extra: Extra[] = [
      ObjectMother.extra(),
      ObjectMother.extra(),
      ObjectMother.extra(),
    ]
  ): Member {
    return this.create(
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      extra
    )
  }
}
