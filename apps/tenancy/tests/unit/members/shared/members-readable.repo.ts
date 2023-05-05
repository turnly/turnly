/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { IReadableRepository } from '@turnly/core'
import { TestReadableRepo } from '@turnly/testing'
import { Member } from 'members/shared/domain/entity/member.entity'

export class MembersReadableRepo
  extends TestReadableRepo<Member>
  implements IReadableRepository<Member> {}
