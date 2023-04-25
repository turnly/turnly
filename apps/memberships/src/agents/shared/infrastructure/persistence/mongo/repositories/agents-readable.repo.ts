/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { MongoReadableRepo } from '@turnly/core'
import { IAgentsMapper } from 'agents/shared/domain/contracts/agents-mapper.interface'
import { IAgentsReadableRepo } from 'agents/shared/domain/contracts/agents-repo.interface'
import { Agent } from 'agents/shared/domain/entity/agent.entity'

import { AgentModel, IAgentDocument } from '../models/agent.model'

export class AgentsReadableRepo
  extends MongoReadableRepo<Agent, IAgentDocument>
  implements IAgentsReadableRepo
{
  public constructor(agentsMapper: IAgentsMapper<IAgentDocument>) {
    super(AgentModel, agentsMapper)
  }
}
