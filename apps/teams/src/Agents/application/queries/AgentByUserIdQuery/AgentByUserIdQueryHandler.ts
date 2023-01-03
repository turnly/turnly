/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'
import { IQueryHandler, QueryBuilder, QueryHandler } from '@turnly/shared'
import { IAgentsReadableRepo } from 'Agents/domain/contracts/IAgentsRepo'
import { Agent } from 'Agents/domain/entities/Agent'

import { AgentByUserIdQuery } from './AgentByUserIdQuery'

@QueryHandler(AgentByUserIdQuery)
export class AgentByUserIdQueryHandler
  implements IQueryHandler<AgentByUserIdQuery, Nullable<Agent>>
{
  public constructor(
    private readonly agentsReadableRepo: IAgentsReadableRepo
  ) {}

  public async execute({ userId }: AgentByUserIdQuery) {
    const query = new QueryBuilder<Agent>().equal('userId', userId).getOne()

    const agent = await this.agentsReadableRepo.getOne(query)

    return !Array.isArray(agent) ? agent : null
  }
}
