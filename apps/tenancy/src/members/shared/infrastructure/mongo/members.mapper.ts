/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { EntityAttributes } from '@turnly/core'
import { IMembersMapper } from 'members/shared/domain/contracts/members-mapper.interface'
import { Member } from 'members/shared/domain/entity/member.entity'

import { IMemberDocument, MemberModel } from './member.model'

export class MembersMapper implements IMembersMapper<IMemberDocument> {
  public toEntity(document: IMemberDocument): Member {
    const { _id, ...attrs } = document.toObject<EntityAttributes<Member>>()

    return Member.build({ ...attrs, id: String(_id) })
  }

  public toModel(entity: Member): IMemberDocument {
    const { id: _id, ...attrs } = entity.toObject()

    return new MemberModel({ ...attrs, _id })
  }

  public toEntityList(documents: IMemberDocument[]): Member[] {
    return documents?.map(document => this.toEntity(document))
  }

  public toModelList(entities: Member[]): IMemberDocument[] {
    return entities?.map(entity => this.toModel(entity))
  }
}
