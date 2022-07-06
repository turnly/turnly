/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { MongoReadableRepo } from '@turnly/shared'
import { IAgentsMapper } from 'Agents/domain/contracts/IAgentsMapper'
import { IAgentsReadableRepo } from 'Agents/domain/contracts/IAgentsRepo'
import { Agent } from 'Agents/domain/entities/Agent'

import { AgentModel, IAgentDocument } from '../models/AgentModel'

export class AgentsReadableRepo
  extends MongoReadableRepo<Agent, IAgentDocument>
  implements IAgentsReadableRepo
{
  public constructor(agentsMapper: IAgentsMapper<IAgentDocument>) {
    super(AgentModel, agentsMapper)
  }
}
