import { MongoReadableRepo } from '@turnly/shared'
import { IAgentsMapper } from 'Agents/domain/contracts/IAgentsMapper'
import { IAgentReadableRepo } from 'Agents/domain/contracts/IAgentsRepo'
import { Agent } from 'Agents/domain/entities/Agent'

import { AgentDocument, AgentModel } from '../models/AgentModel'

export class AgentReadableRepo
  extends MongoReadableRepo<Agent, AgentDocument>
  implements IAgentReadableRepo
{
  public constructor(agentsMapper: IAgentsMapper<AgentDocument>) {
    super(AgentModel, agentsMapper)
  }
}
