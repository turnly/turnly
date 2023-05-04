/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { MongoWritableRepo } from '@turnly/core'
import { IMembersMapper } from 'members/shared/domain/contracts/members-mapper.interface'
import { IMembersWritableRepo } from 'members/shared/domain/contracts/members-repo.interface'
import { Member } from 'members/shared/domain/entity/member.entity'

import { IMemberDocument, MemberModel } from './member.model'

export class MembersWritableRepo
  extends MongoWritableRepo<Member, IMemberDocument>
  implements IMembersWritableRepo
{
  public constructor(membersMapper: IMembersMapper<IMemberDocument>) {
    super(MemberModel, membersMapper)
  }
}
