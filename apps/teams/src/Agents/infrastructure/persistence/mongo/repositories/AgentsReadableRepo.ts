/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
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
