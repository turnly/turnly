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
      member.setLastname(entity.lastname)
      member.setLocationId(entity.locationId)
      member.setOrganizationId(entity.organizationId)

      if (entity.userId) member.setUserId(entity.userId)

      if (entity.nick) member.setNick(entity.nick)

      if (entity.position) member.setPosition(entity.position)

      if (entity.servingFromIds)
        member.setServingFromIdsList(entity.servingFromIds)
    }

    return member
  }
}
