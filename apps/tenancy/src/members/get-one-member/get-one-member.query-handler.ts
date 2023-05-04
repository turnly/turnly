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

import { GetOneMemberQuery } from './get-one-member.query'

@QueryHandler(GetOneMemberQuery)
export class GetOneMemberQueryHandler
  implements IQueryHandler<GetOneMemberQuery, Nullable<Member>>
{
  public constructor(
    private readonly membersReadableRepo: IMembersReadableRepo
  ) {}

  public async execute({ id, organizationId }: GetOneMemberQuery) {
    const query = new QueryBuilder<Member>()
      .equal('id', id)
      .equal('organizationId', organizationId)
      .getOne()

    const member = await this.membersReadableRepo.getOne(query)

    return !Array.isArray(member) ? member : null
  }
}
