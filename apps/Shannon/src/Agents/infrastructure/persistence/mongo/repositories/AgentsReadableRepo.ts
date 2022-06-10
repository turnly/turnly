import { Guid, NotImplementedError, Nullable } from '@turnly/common'
import { Criteria, MongoRepository } from '@turnly/shared'
import { IAgentsMapper } from 'Agents/domain/contracts/IAgentsMapper'
import { IAgentReadableRepo } from 'Agents/domain/contracts/IAgentsRepo'
import { Agent } from 'Agents/domain/entities/Agent'

import { AgentDocument, AgentModel } from '../models/AgentModel'

export class AgentReadableRepo
  extends MongoRepository<Agent, AgentDocument>
  implements IAgentReadableRepo
{
  public constructor(
    private readonly agentsMapper: IAgentsMapper<AgentDocument>
  ) {
    super(AgentModel)
  }

  public async getById(id: Guid): Promise<Nullable<Agent>> {
    const document = await this.model.findById(id)

    return document ? this.agentsMapper.toEntity(document) : null
  }

  public async search(_query: Criteria): Promise<Nullable<Agent[]>> {
    throw new NotImplementedError()
  }
}
