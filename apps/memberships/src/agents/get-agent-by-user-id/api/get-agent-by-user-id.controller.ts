/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable, ResourceNotFoundException } from '@turnly/common'
import {
  Controller,
  InputValidator,
  IQueryBus,
  TimeoutHandler,
} from '@turnly/shared'
import { Agent } from 'agents/shared/domain/entity/agent.entity'

import { GetAgentByUserIdQuery } from '../queries/get-agent-by-user-id.query'
import { GetAgentByUserIdValidator } from './get-agent-by-user-id.validator'

export class GetAgentByUserIdController extends Controller {
  public constructor(private readonly queryBus: IQueryBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(GetAgentByUserIdValidator)
  public async execute(params: GetAgentByUserIdQuery) {
    const agent = await this.queryBus.ask<Nullable<Agent>>(
      new GetAgentByUserIdQuery(params.userId)
    )

    if (!agent) throw new ResourceNotFoundException()

    return this.respond.ok(agent.toObject())
  }
}
