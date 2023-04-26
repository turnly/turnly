/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'
import { IQueryHandler, QueryBuilder, QueryHandler } from '@turnly/core'
import { IAgentsReadableRepo } from 'agents/shared/domain/contracts/agents-repo.interface'
import { Agent } from 'agents/shared/domain/entity/agent.entity'

import { GetOneAgentQuery } from './get-one-agent.query'

@QueryHandler(GetOneAgentQuery)
export class GetOneAgentQueryHandler
  implements IQueryHandler<GetOneAgentQuery, Nullable<Agent>>
{
  public constructor(
    private readonly agentsReadableRepo: IAgentsReadableRepo
  ) {}

  public async execute({ id, organizationId }: GetOneAgentQuery) {
    const query = new QueryBuilder<Agent>()
      .equal('id', id)
      .equal('organizationId', organizationId)
      .getOne()

    const agent = await this.agentsReadableRepo.getOne(query)

    return !Array.isArray(agent) ? agent : null
  }
}
