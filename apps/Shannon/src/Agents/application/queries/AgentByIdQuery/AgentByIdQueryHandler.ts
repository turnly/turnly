import { Nullable } from '@turnly/common'
import { IQueryHandler, QueryHandler } from '@turnly/shared'
import { IAgentReadableRepo } from 'Agents/domain/contracts/IAgentsRepo'
import { Agent } from 'Agents/domain/entities/Agent'

import { AgentByIdQuery } from './AgentByIdQuery'

@QueryHandler(AgentByIdQuery)
export class AgentByIdQueryHandler
  implements IQueryHandler<AgentByIdQuery, Nullable<Agent>>
{
  public constructor(private readonly agentsReadableRepo: IAgentReadableRepo) {}

  public async execute({ params }: AgentByIdQuery) {
    const { id } = params

    return await this.agentsReadableRepo.getById(id)
  }
}
