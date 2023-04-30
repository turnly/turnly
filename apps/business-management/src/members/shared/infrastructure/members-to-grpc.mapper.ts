/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'
import { EntityAttributes } from '@turnly/core'
import { Producers } from '@turnly/grpc'
import { Member } from 'members/shared/domain/entity/member.entity'

export class MembersMapper {
  public static toRPC(
    entity: Nullable<EntityAttributes<Member>> | undefined
  ): Producers.BusinessManagement.Member {
    const member = new Producers.BusinessManagement.Member()

    if (entity) {
      member.setId(entity.id)
      member.setName(entity.name)
      member.setRole(entity.role)
      member.setUserId(entity.userId)

      if (entity.locationId) member.setLocationId(entity.locationId)

      if (entity.extra) {
        const extras = entity.extra.map(extra =>
          new Producers.BusinessManagement.Extra()
            .setKey(extra.key)
            .setValue(extra.value)
        )

        member.setExtrasList(extras)
      }
    }

    return member
  }
}
