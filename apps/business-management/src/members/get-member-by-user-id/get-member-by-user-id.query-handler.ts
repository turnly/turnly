/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'
import { IQueryHandler, QueryBuilder, QueryHandler } from '@turnly/core'
import { IMembersReadableRepo } from 'members/shared/domain/contracts/members-repo.interface'
import { Member } from 'members/shared/domain/entity/member.entity'

import { GetMemberByUserIdQuery } from './get-member-by-user-id.query'

@QueryHandler(GetMemberByUserIdQuery)
export class GetMemberByUserIdQueryHandler
  implements IQueryHandler<GetMemberByUserIdQuery, Nullable<Member>>
{
  public constructor(
    private readonly membersReadableRepo: IMembersReadableRepo
  ) {}

  public async execute({ userId }: GetMemberByUserIdQuery) {
    const query = new QueryBuilder<Member>().equal('userId', userId).getOne()

    const member = await this.membersReadableRepo.getOne(query)

    return !Array.isArray(member) ? member : null
  }
}
