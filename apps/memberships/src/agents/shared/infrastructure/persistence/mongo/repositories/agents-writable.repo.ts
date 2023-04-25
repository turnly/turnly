/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { MongoWritableRepo } from '@turnly/core'
import { IAgentsMapper } from 'Agents/domain/contracts/IAgentsMapper'
import { IAgentsWritableRepo } from 'Agents/domain/contracts/IAgentsRepo'
import { Agent } from 'agents/shared/domain/entity/agent.entity'

import { AgentModel, IAgentDocument } from '../models/agent.model'

export class AgentsWritableRepo
  extends MongoWritableRepo<Agent, IAgentDocument>
  implements IAgentsWritableRepo
{
  public constructor(agentsMapper: IAgentsMapper<IAgentDocument>) {
    super(AgentModel, agentsMapper)
  }
}