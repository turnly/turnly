/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'
import {
  Controller,
  InputValidator,
  IQueryBus,
  TimeoutHandler,
} from '@turnly/core'
import { ResourceNotFoundException } from '@turnly/observability'
import { Member } from 'members/shared/domain/entity/member.entity'

import { GetMemberByUserIdQuery } from './get-member-by-user-id.query'
import { GetMemberByUserIdValidator } from './get-member-by-user-id.validator'

export class GetMemberByUserIdController extends Controller {
  public constructor(private readonly queryBus: IQueryBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(GetMemberByUserIdValidator)
  public async execute(params: GetMemberByUserIdQuery) {
    const member = await this.queryBus.ask<Nullable<Member>>(
      GetMemberByUserIdQuery.build(params)
    )

    if (!member) throw new ResourceNotFoundException()

    return this.respond.ok(member.toObject())
  }
}
