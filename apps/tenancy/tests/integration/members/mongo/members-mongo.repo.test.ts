/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import '../../../../../src/Members/infrastructure/register-dependencies/dependencies'

import { MongoEnvironmentArranger } from '@turnly/core'
import { ResourceNotFoundException } from '@turnly/observability'

import { MembersModule } from '../../../../src/members/members.module'
import { MemberMother } from '../../../unit/members/shared/member.entity.mother'
import { MembersQueryMother } from './members-query.mother'

const writableRepo = MembersModule.getWritableRepo()
const readableRepo = MembersModule.getReadableRepo()
const environmentArranger = new MongoEnvironmentArranger()

describe('members > infrastructure > mongo > validates the expected behavior of mongo-repositories', () => {
  beforeEach(async () => {
    await environmentArranger.arrange()
  })
  afterAll(async () => {
    await environmentArranger.arrange()
    await environmentArranger.close()
  })

  it('should persist a random member to mongo database', async () => {
    const member = MemberMother.random()

    await writableRepo.save(member)
  })

  it('should persist multiple members using bulk insert to mongo database', async () => {
    const members = MemberMother.collection()

    await writableRepo.save(members)
  })

  it('should retrieve a existing member using getOne()', async () => {
    const member = MemberMother.random()

    await writableRepo.save(member)

    const persisted = await readableRepo.getOne(
      MembersQueryMother.getOneWith(member)
    )

    if (!persisted) throw new ResourceNotFoundException()

    const attributes = persisted.toObject()
    const expected = member.toObject()

    expect(attributes.id).toEqual(expected.id)
  })

  it('should retrieve multiple members using find()', async () => {
    const members = MemberMother.collection()

    await writableRepo.save(members)

    const persisted = await readableRepo.find(
      MembersQueryMother.getManyIn(members)
    )

    if (!persisted.length) throw new ResourceNotFoundException()

    expect(persisted.length).toEqual(members.length)
  })

  it('should not retrieve a non-existing member using getOne()', async () => {
    const member = await readableRepo.getOne(
      MembersQueryMother.getOneWith(MemberMother.random())
    )

    expect(member).toBeNull()
  })
})
