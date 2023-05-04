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

import { GetOneMemberQuery } from './get-one-member.query'
import { GetOneMemberValidator } from './get-one-member.validator'

export class GetOneMemberController extends Controller {
  public constructor(private readonly queryBus: IQueryBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(GetOneMemberValidator)
  public async execute(params: GetOneMemberQuery) {
    const member = await this.queryBus.ask<Nullable<Member>>(
      GetOneMemberQuery.build(params)
    )

    if (!member) throw new ResourceNotFoundException()

    return this.respond.ok(member.toObject())
  }
}
