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
import { Agent } from 'agents/shared/domain/entity/agent.entity'

import { GetOneAgentQuery } from './get-one-agent.query'
import { GetOneAgentValidator } from './get-one-agent.validator'

export class GetOneAgentController extends Controller {
  public constructor(private readonly queryBus: IQueryBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(GetOneAgentValidator)
  public async execute(params: GetOneAgentQuery) {
    const agent = await this.queryBus.ask<Nullable<Agent>>(
      new GetOneAgentQuery(params.id, params.organizationId)
    )

    if (!agent) throw new ResourceNotFoundException()

    return this.respond.ok(agent.toObject())
  }
}
