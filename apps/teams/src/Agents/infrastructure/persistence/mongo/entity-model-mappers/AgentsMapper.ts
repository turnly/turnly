/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { EntityAttributes } from '@turnly/shared'
import { IAgentsMapper } from 'Agents/domain/contracts/IAgentsMapper'
import { Agent } from 'Agents/domain/entities/Agent'

import { AgentModel, IAgentDocument } from '../models/AgentModel'

export class AgentsMapper implements IAgentsMapper<IAgentDocument> {
  public toEntity(document: IAgentDocument): Agent {
    const { _id, ...attrs } = document.toObject<EntityAttributes<Agent>>()

    return Agent.build({ ...attrs, id: String(_id) })
  }

  public toModel(entity: Agent): IAgentDocument {
    const { id: _id, ...attrs } = entity.toObject()

    return new AgentModel({ ...attrs, _id })
  }

  public toEntityList(documents: IAgentDocument[]): Agent[] {
    return documents?.map(document => this.toEntity(document))
  }

  public toModelList(entities: Agent[]): IAgentDocument[] {
    return entities?.map(entity => this.toModel(entity))
  }
}
