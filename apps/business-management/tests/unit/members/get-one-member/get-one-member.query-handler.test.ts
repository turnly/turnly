/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { GetOneMemberQueryHandler } from '../../../../src/members/get-one-member'
import { MemberMother } from '../shared/member.entity.mother'
import { MembersReadableRepo } from '../shared/members-readable.repo'
import { GetOneMemberQueryMother } from './get-one-member.query.mother'

let repository: MembersReadableRepo
let handler: GetOneMemberQueryHandler

describe('members > queries > validates the expected behavior of MemberByIdQuery', () => {
  beforeEach(() => {
    repository = new MembersReadableRepo()
    handler = new GetOneMemberQueryHandler(repository)
  })

  it('should get an existing member', async () => {
    const query = GetOneMemberQueryMother.random()
    const member = MemberMother.fromExistingMemberOnQuery(query)

    repository.attachGetOneResponse(member)

    const response = await handler.execute(query)

    expect(response).toEqual(member)
    repository.assertGetOneHasBeenCalled()
  })
})
