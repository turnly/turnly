/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'
import { IQueryHandler, QueryBuilder, QueryHandler } from '@turnly/shared'
import { IAgentsReadableRepo } from 'agents/shared/domain/contracts/agents-repo.interface'
import { Agent } from 'agents/shared/domain/entity/agent.entity'

import { GetAgentByUserIdQuery } from './get-agent-by-user-id.query'

@QueryHandler(GetAgentByUserIdQuery)
export class GetAgentByUserIdQueryHandler
  implements IQueryHandler<GetAgentByUserIdQuery, Nullable<Agent>>
{
  public constructor(
    private readonly agentsReadableRepo: IAgentsReadableRepo
  ) {}

  public async execute({ userId }: GetAgentByUserIdQuery) {
    const query = new QueryBuilder<Agent>().equal('userId', userId).getOne()

    const agent = await this.agentsReadableRepo.getOne(query)

    return !Array.isArray(agent) ? agent : null
  }
}
