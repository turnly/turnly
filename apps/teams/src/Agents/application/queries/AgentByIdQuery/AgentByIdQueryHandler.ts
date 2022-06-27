import { Nullable } from '@turnly/common'
import { IQueryHandler, QueryBuilder, QueryHandler } from '@turnly/shared'
import { IAgentsReadableRepo } from 'Agents/domain/contracts/IAgentsRepo'
import { Agent } from 'Agents/domain/entities/Agent'

import { AgentByIdQuery } from './AgentByIdQuery'

@QueryHandler(AgentByIdQuery)
export class AgentByIdQueryHandler
  implements IQueryHandler<AgentByIdQuery, Nullable<Agent>>
{
  public constructor(
    private readonly agentsReadableRepo: IAgentsReadableRepo
  ) {}

  public async execute({ id, organizationId }: AgentByIdQuery) {
    const query = new QueryBuilder<Agent>()
      .equal('id', id)
      .equal('organizationId', organizationId)
      .getOne()

    const agent = await this.agentsReadableRepo.find(query)

    return !Array.isArray(agent) ? agent : null
  }
}
